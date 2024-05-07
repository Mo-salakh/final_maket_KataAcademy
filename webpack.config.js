const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  // Входной файл
  entry: ['./src/js/index.js'],

  // Выходной файл
  output: {
    filename: './js/bundle.js',
    path: path.resolve(__dirname, 'dist') // Добавлен "path" в output
  },

  // Source maps для удобства отладки
  devtool: 'source-map',

  module: {
    rules: [
      // Транспилируем js с babel
      {
        test: /.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // или 'style-loader', если вы не хотите выделять стили в отдельный файл
          'css-loader', // Переводит CSS в CommonJS
          'postcss-loader', // Добавление вендорных префиксов и оптимизация
          'sass-loader' // Компилирует SCSS в CSS
        ]
      }
      // ... (остальные правила неизменные)
    ]
  },
  plugins: [
    // Подключаем файл html, стили и скрипты встроятся автоматически
    new HtmlWebpackPlugin({
      title: 'Webpack 4 Starter',
      template: './src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),

    // Кладем стили в отдельный файлик
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),

    // Копируем картинки
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', 'img'),
          to: path.resolve(__dirname, 'dist', 'img')
        }
      ]
    })
  ]
}
