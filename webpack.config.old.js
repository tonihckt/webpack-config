const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
    // mode: 'development',
    mode: 'production',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/[name].js'
    },
    // // CONFIG SERVER
    // devServer: {
    //     hot: true,
    //     // open: true,
    //     port: 5572,
    // },
    /**
    * ------------------------------------------------------------------------
    *     LOADERS - interpreta tipos de archivos
    * ------------------------------------------------------------------------
    **/
   module: {
        rules: [
            // JS _ BABEL
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            // CSS 
            {
                test: /\.css$/,
                use: [
                    {
                      loader: MiniCSSExtractPlugin.loader,
                    },                
                    {
                    loader: 'css-loader',
                    options: {
                      importLoaders: 1
                    }
                  },
                  'postcss-loader',
                ]
            },            
            // SASS
            {
                test: /\.scss$/,
                use: [
                    {
                      loader: MiniCSSExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader',
                ]
            },
           // LESS
            {
                test: /\.less$/,
                use: [
                    {
                      loader: MiniCSSExtractPlugin.loader,
                    },
                    'css-loader',
                    'less-loader',
                ]
            },
           // STYLUS
            {
                test: /\.styl$/,
                use: [
                    {
                      loader: MiniCSSExtractPlugin.loader,
                    },
                    'css-loader',
                    'stylus-loader',
                ]
            },
            // URL - LOADER
            {
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use: {
                  loader: 'url-loader',
                  options: {
                      // BASE 64
                    limit: 900000,
                  }
                }
            },
        ]
    },
    /**
    * ------------------------------------------------------------------------
    *     PLUGINS - extienden las funcionalidades de los loader
    * ------------------------------------------------------------------------
    **/   
   plugins:[
    new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: 'css/[id].css'
    }),       
    new webpack.HotModuleReplacementPlugin(), // solo cargar funciones que se quiere recargar
    new HtmlWebpackPlugin({
        title: 'webpack-dev-server',
        // cuando renderizas archivos react
        template: path.resolve(__dirname,'index.html'),
        // minify: {
		// collapseWhitespace: true
	    // }
    }),
    // new MiniCSSExtractPlugin({
    //   filename: 'css/[name].css'
    // })
    // coge la config de Dll
    new webpack.DllReferencePlugin({
        /// se crea cuando se inicia build:dll
        manifest: require('./modules-manifest.json')
    }),
  ],
    /**
    * ------------------------------------------------------------------------
    *     OPTIMIZATION - previene el duplicado del contenido
    * ------------------------------------------------------------------------
    **/   
//    optimization: {
//         splitChunks: { // es cada import
//             chunks: 'all',
//             minSize: 0,
//             name: 'commons'
//         }
//     }
}