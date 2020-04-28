module.exports = {
  entry: __dirname + '/client/app.jsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
+   module: {
+     rules: [
+       {
+         test: /\.css$/,
+         use: [
+           'style-loader',
+           'css-loader',
+         ],
+       },
+     ],
+   },
};