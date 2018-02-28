// dev-server依赖的webpack配置是webpack.dev.conf.js文件，
// 测试环境下使用的是webpack.prod.conf.js
// webpack.dev.conf.js中又引用了webpack.base.conf.js
// webpack.base.conf.js主要完成了下面这些事情：
// 配置webpack编译入口
// 配置webpack输出路径和命名规则
// 配置模块resolve规则
// 配置不同类型模块的处理规则
var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  // 配置webpack编译入口
  entry: {
    app: './src/main.js'
  },
  // 配置webpack输出路径和命名规则
  output: {   
    path: config.build.assetsRoot,
    //webpack输出bundle文件命名格式
    filename: '[name].js',
    //webpack 编译输出的发布路径
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  // 配置模块resolve规则
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      // 别名，方便引用模块，例如有了别名之后，
    // import Vue from 'vue/dist/vue.common.js'可以写成 import Vue from 'vue'
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },

// 配置不同类型模块的处理规则
  module: {
    rules: [
      {// 对src和test文件夹下的.js和.vue文件使用eslint-loader进行代码规范检查
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {// 对所有.vue文件使用vue-loader进行编译
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      { // 对src和test文件夹下的.js文件使用babel-loader将es6+的代码转成es5
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      { // 对图片资源文件使用url-loader
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          // 小于10K的图片转成base64编码的dataURL字符串写到代码中
          limit: 10000,
          //其他的图片转移到静态资源文件夹中
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {//对字体文件资源使用url-loader
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          //小于10k的资源转成base64编码的dataUrl字符串写到代码中
          limit: 10000,
          //其他资源转移到静态资源文件夹
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
