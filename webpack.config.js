// const webpack = require('webpack');
const path = require('path');


module.exports = {
    mode: 'development',
    entry: [
        './client/app/app.jsx'
    ],
    output: {
        path: path.resolve(__dirname + '/client/','public'),
        filename: 'bundle.js'
    },
    resolve: {
        modules: [
            'node_modules',
            'components',
            'reducers',
            'store',
            'actions',
            'styles',
            'queries',
            'api'
        ],
        alias: {

        },
        extensions: ['.scss','.js', '.jsx']
    },
    module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react', '@babel/preset-env']
                
              }
            }
          },
          {
            test: /\.scss$/,
            exclude: /(node_modules|bower_components)/,
            use: ['style-loader', 'css-loader', 'sass-loader']
            
          },
          {
            test: /\.mjs$/,
            include: /node_modules/,
            type: "javascript/auto"
          }
        ]
    }




}