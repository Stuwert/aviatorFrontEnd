const path = require('path');
const merge = require('webpack-merge')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const NpmInstallPlugin = require('npm-install-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')

const pkg = require('./package.json')

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
  style: path.join(__dirname, 'app/main.css'),
  images: path.join(__dirname, 'app/images')
}

process.env.BABEL_ENV = TARGET;


const common = {


  entry: {
    app: PATHS.app,
    style: PATHS.style
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  module: {
    // postLoaders: [
    //   {
    //     loader: "transform?brfs"
    //   }
    // ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.app
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url?limit=25000',
        include: PATHS.images
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'node_modules/html-webpack-template/index.ejs',
      title: 'Aviator app',
      appMountId: 'app',
      inject: false
    })
  ]


};

if (TARGET === 'start' || !TARGET){
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {

      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',

      host: process.env.HOST,
      port: process.env.PORT

    },
    module: {
      loaders: [
        {
          //Test expects a RegExp! Note the slashes
          test: /\.css$/,
          loaders: ['style', 'css'],
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
        return v !== 'alt-utils';
      })
    },
    output:{
      path: PATHS.build,
      filename: '[name].[chunkhash].js',
      chunkFilename: '[chunkhash].js'
    },
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style', 'css'),
          include: PATHS.app
        }
      ]
    },
    plugins: [
      new CleanPlugin([PATHS.build]),
      new webpack.optimize.CommonsChunkPlugin({
        name: ['vendor' , 'manifest']
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV' : '"production"'
      }),
      // new webpack.optimize.UglifyJsPlugin({
      //   compress: {
      //     warnings: false
      //   }
      // }),
      new ExtractTextPlugin('[name].[chunkhash].css')
    ]
  });
}
