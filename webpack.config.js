/**
 * Created by pedram on 05/02/17.
 */

var config = {
    entry: './js/src/index.jsx',

    output: {
        filename: './js/dist/index.js'
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
