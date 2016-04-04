const path = require('path');
const merge = require('webpack-merge')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const NpmInstallPlugin = require('npm-install-webpack-plugin')

const pkg = require('./package.json')

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
}

process.env.BABEL_ENV = TARGET;


const common = {


  entry: {
    app: PATHS.app
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.app
      }
    ],
    postLoaders: [
      {
        loader: "transform?brfs"
      }
    ]
  }


};

if (TARGET === 'start' || !TARGET){
  module.exports = merge(common, {
    devTool: 'eval-source-map',
    devServer: {
      contentBase: PATHS.build,

      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',

      host: process.env.HOST,
      port: process.env.PORT

    },
    module: {
      preLoaders: [
        {
          test: /\.jsx?$/,
          loaders: ['eslint'],
          indlue: PATHS.app
        }
      ],
      loaders: [
        {
          //Test expects a RegExp! Note the slashes
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass'],
          include: PATHS.app
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new NpmInstallPlugin({
        save: true // --save
      })
    ]
  });
}

if(TARGET === 'build'){
  module.exports = merge(common, {
    entry : {
      vendor: Object.keys(pkg.dependencies).filter(function(v){
        return v !== 'alt-utils'
      })
    },
    output:{
      path: PATHS.build,
      filename: '[name].[chunkhash].js',
      chunkFilename: '[chunkhash].js'
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: ['vendor' , 'manifest']
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV' : '"production"'
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ],
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style', 'css', 'scss'),
          include: PATHS.app
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('[name].[chunkhash].css')
    ]
  });
}
