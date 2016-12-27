var webpack = require('webpack');
var LiveReloadPlugin = require('webpack-livereload-plugin');
var path = require('path');

 module.exports = {
   entry: [
      'script!jquery/dist/jquery.min.js',
      'script!foundation-sites/dist/js/foundation.min.js',
      './app/app.jsx'
   ],
   externals: {
     jquery: 'jQuery'
   },
   plugins : [
     new webpack.ProvidePlugin({
       '$': 'jquery',
       'jQuery': 'jquery'
     })
   ],
   output: {
     path: __dirname,
     filename: '/public/bundle.js'
   },
   plugins: [new LiveReloadPlugin()],
   resolve: {
     root:__dirname,
     alias: {
       applicationStyles: 'app/styles/app.scss',
       Main: 'app/components/Main.jsx',
       Input: 'app/components/Input.jsx',
       Output: 'app/components/Output.jsx',
       Nav: 'app/components/Nav.jsx'
     },
     extensions: ['', '.js', '.jsx']
   },
   module : {
     loaders: [
       {
         loader: 'babel-loader',
         query: {
           presets: ['react',  'es2015', 'stage-0' ]
         },
         test: /\.jsx?$/,
         exclude: /(node_modules|bower_components)/
       }
     ]
   },
   sassLoader: {
     includePaths: [
       path.resolve(__dirname, './node_modules/foundation-sites/scss')
     ]
   },
    devtool: 'inline-source-map'
 };
