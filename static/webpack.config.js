const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const debug = true;


module.exports = {
    context: __dirname,
    devtool: debug ? 'inline-eval-cheap-source-map' : 'source-map',
    entry: {
        dashboard: "./components/index.js",
    },
    output: {
        //where you want your compiled bundle to be stored
        path: path.resolve('./assets/'),
        //naming convention webpack should use for your files
        filename: '[name].react-compiled.js'
    }
    ,
    resolve: {
        extensions: ['', '.scss', '.css', '.js', '.json'],
        modulesDirectories: [
            'node_modules',
            path.resolve(__dirname, './node_modules')
        ]
    }
    ,
    module: {
        loaders: [
            {
                test: /(\.js|\.jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: { presets: ['es2015', 'stage-0', 'react'] }
            }, {
                test: /(\.scss|\.css)$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?{progressive:true, optimizationLevel: 3, interlaced: false, pngquant:{quality: "30-40", speed: 1}}'
                ]
            }
        ]
    }
    ,
    postcss: [autoprefixer],
    sassLoader: {
        data: '@import "./theme/_config.scss";',
        includePaths: [path.resolve(__dirname, './static')]
    }
    ,
    plugins: [
        new ExtractTextPlugin('./[name].react-toolbox.css', { allChunks: true }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': debug ? JSON.stringify('development') : JSON.stringify('production')
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: !debug,
        //     compressor: {
        //         warnings: false
        //     }
        // }),
    ]
}
    ;
