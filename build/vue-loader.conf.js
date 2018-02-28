//vue-loader.conf则只配置了css加载器以及编译css之后自动添加前缀。
var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
	//处理 .vue中文件的样式
  loaders: utils.cssLoaders({
  	//是否打开souceMap
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
      //是否提取样式到单独的文件
    extract: isProduction
  })
}
