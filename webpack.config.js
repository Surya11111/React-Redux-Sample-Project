const webpack = require('webpack');
const path = require("path");

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports={
    "entry":"./app.jsx",
    "output":{
        path:path.join(__dirname,'public'),
        filename:"bundle.js"
    },
    resolve:{
        modules: [__dirname, 'node_modules','styles'],
        extensions: ['.js', '.jsx','.css']
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: ['babel-loader']
            },
            {
                test:/\.css$/,
                use:[{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }]

            }
        ]
    },
    devServer: {
        contentBase: "./public",
        hot: true
    },
    plugins: [
        new UglifyJSPlugin(),
    ]
}