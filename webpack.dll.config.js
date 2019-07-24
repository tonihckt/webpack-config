const path = require('path')
const webpack = require('webpack')


module.exports = {
    /**
    * ------------------------------------------------------------------------
    *     ENTRY - POINTS
    * ------------------------------------------------------------------------
    **/
    entry: {
        modules: [
        'react',
        'react-dom'
        ]
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/[name].js',
        // enlaza de manera global el js con el codigo
        library: '[name]',
    },
    /**
    * ------------------------------------------------------------------------
    *     PLUGINS - extienden las funcionalidades de los loader
    * ------------------------------------------------------------------------
    **/   
    plugins: [
        new webpack.DllPlugin({
        name: '[name]',
        // este archivo se pasa por webpack.config
        path: path.join(__dirname, '[name]-manifest.json')
        })
    ],
}