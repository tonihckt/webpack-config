const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')


module.exports = {
    /**
    * ------------------------------------------------------------------------
    *     ENTRY - POINTS
    * ------------------------------------------------------------------------
    **/
    entry: {
        home: path.resolve(__dirname,'src/js/index.js'),
        price: path.resolve(__dirname,'src/js/price.js'),
        contact: path.resolve(__dirname,'src/js/contact.js'),
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/[name].js'
    },
    // CONFIG SERVER
    devServer: {
        hot: true,
        open: true,
        port: 9000,
    },
    /**
    * ------------------------------------------------------------------------
    *     LOADERS - interpreta tipos de archivos
    * ------------------------------------------------------------------------
    **/
   module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                      loader: MiniCSSExtractPlugin.loader
                    },
                    // 'style-loader', // lee un fichero css
                    'css-loader'
                ]
            }
        ]
    },
    /**
    * ------------------------------------------------------------------------
    *     PLUGINS - extienden las funcionalidades de los loader
    * ------------------------------------------------------------------------
    **/   
   plugins:[
    new webpack.HotModuleReplacementPlugin(), // solo cargar funciones que se quiere recargar
    new HtmlWebpackPlugin({
        title: 'Plugins',
        // minify: {
		// collapseWhitespace: true
	    // }
    }),
    new MiniCSSExtractPlugin({
      filename: 'css/[name].css'
    })
  ]
}