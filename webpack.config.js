/**
 * Created by pedram on 05/02/17.
 */

var config = {
    entry: './js/src/app.jsx',

    output: {
        filename: './js/dist/app.js',
    },

    devServer: {
        inline: true,
        port: 3000
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}

module.exports = config;
