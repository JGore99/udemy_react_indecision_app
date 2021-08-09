//entry point -> where to output
//restart build watch anytime this file is changed.
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'   
    },
    module: {
        rules: [{
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/  
        }, {
          test: /\.s?css$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }]
    },
    devtool: 'eval-cheap-module-source-map', //webpack.js.org devtool
    devServer: {
        contentBase: path.join(__dirname, 'public')
      },
};


// babel
// webpack
// websockets
// modal
//css-loader
// npm install --save-dev style-loader
// npm install --save-dev css-loader
//npm install sass-loader
//npm install node-sass
//npm install normalize.css USE THIS ALL THE TIME!!