var webpack = require('webpack')
var path = require('path')



module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: "bundle.js",
        publicPath: 'js/'
    },
    watch: true, 

    module: {
        loaders: [
            {
                test: [/\.js$/, /\.jsx$/],
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        minimize: true
                    }
                }, {
                    loader: 'postcss-loader'
                }, {
                    loader: 'sass-loader'
                }]
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],

    devServer: {
        contentBase: './'
    }
}