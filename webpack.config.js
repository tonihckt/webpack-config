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
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    // lee desde esta ruta
    publicPath: 'dist/',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
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
            loader: MiniCssExtractPlugin.loader,
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
    // LESS
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'less-loader',
        ]
      },
    // SASS
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ]
      },
    // STYLUS
      {
        test: /\.styl$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
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
            limit: 90000,
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack-dev-server',
    // cuando renderizas archivos react
      template: path.resolve(__dirname, 'index.html'),
        // minify: {
		// collapseWhitespace: true
	    // }
    }),
    // coge la config de Dll
    new webpack.DllReferencePlugin({
    /// se crea cuando se inicia build:dll
      manifest: require('./modules-manifest.json')
    })
  ],
}