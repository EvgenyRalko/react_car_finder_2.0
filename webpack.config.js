var config = {
    entry: './src/main.js',

    output: {
        path:'./src/',
        filename: 'index.js'
    },

    devServer: {
        inline: true,
        port: 5555,
        contentBase: './src/'
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.(png|woff|woff2|eot|otf|ttf|svg)(\?.*$|$)/,
                loader: 'url-loader?limit=100000'
            }
        ]
    }
};

module.exports = config;
