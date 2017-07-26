const webpack = require('webpack');
const path = require('path');
const OfflinePlugin = require('offline-plugin');

const debug = process.env.NODE_ENV !== 'production';

module.exports = {
    context: `${__dirname}/src`,
    target: 'web',
    devtool: debug ? 'inline-sourcemap' : 'cheap-module-source-map',
    entry: { bundle: './entry.js' },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: [
                    {
                        loader: 'style-loader',
                        options: { minimize: !debug },
                    },
                    {
                        loader: 'css-loader',
                        options: { minimize: !debug },
                    },
                    {
                        loader: 'sass-loader',
                        options: { minimize: !debug },
                    },
                    {
                        loader: 'string-replace-loader',
                        query: {
                            search: '\\+\\+',
                            replace: '@include ',
                            flags: 'g',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        alias: {
            Actions: path.resolve(__dirname, './src/actions/'),
            Components: path.resolve(__dirname, './src/components/'),
            Constants: path.resolve(__dirname, './src/constants.js'),
            Reducers: path.resolve(__dirname, './src/reducers/'),
            Theme: path.resolve(__dirname, './src/theme/'),
        },
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../public'),
    },
    plugins: (debug ? [] : [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(debug ? undefined : 'production'),
            },
        }),
    ]).concat([
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: ({ resource }) => /node_modules/.test(resource),
        }),
        new webpack.optimize.CommonsChunkPlugin({ name: 'manifest' }),
    ]).concat(debug ? [] : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.UglifyJsPlugin({ comments: false }),
    ]).concat([
        new OfflinePlugin({
            autoUpdate: true,
            publicPath: '/',
            ServiceWorker: {
                events: true,
                navigateFallbackURL: '/',
            },
            AppCache: { events: true },
            externals: [
                'index.html',
                'manifest.json',
            ],
        }),
    ]),
};
