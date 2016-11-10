var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var gracefulFs = require('graceful-fs');
gracefulFs.gracefulify(fs);

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      MainContent: 'app/components/MainContent.jsx',
      NewRequest: 'app/components/NewRequest.jsx',
      RequestsAccess: 'app/components/RequestsAccess.jsx',
      RequestsPasswordReset: 'app/components/RequestsPasswordReset.jsx',
      RequestsAccessFilterForm: 'app/components/RequestsAccessFilterForm.jsx',
      RequestsAccessTable: 'app/components/RequestsAccessTable.jsx',
      PasswordResetForm: 'app/components/PasswordResetForm.jsx',
      AcceptAicForm: 'app/components/AcceptAicForm.jsx',
      FormInput: 'app/components/FormInput.jsx',
      FormSelect: 'app/components/FormSelect.jsx',
      applicationStyle: 'app/styles/app.scss'
    },
    extensions: ['', '.js', '.jsx','.json']
  },
  devtool: 'cheap-module-eval-source-map',
  // module: {
  //   loaders: [{
  //     test: /\.jsx$/,
  //     loaders: ['babel'],
  //     include: path.join(__dirname, 'app')
  //   }]
  // }
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loaders: ['eslint'],
        include: path.join(__dirname, 'app')
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: [ 'babel-loader?presets[]=es2015,presets[]=stage-0,presets[]=react,presets[]=react-hmre'],
        include: path.join(__dirname, 'app'),
        plugins: ['transform-runtime'],
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.css/,
        loaders: ['style', 'css'],
        include: path.join(__dirname, 'app'),
      }
    ]
  }
};
