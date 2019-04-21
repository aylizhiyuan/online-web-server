/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1555388915830_3673';

  // 添加全局的中间件
  config.middleware = ['koa2Cors','errorHandler','checkToken'];
  //checkToken的配置
  config.checkToken = {
    //白名单
    whiteList:['/admin/login']
  }
  //acl的配置
  config.acl = {
    //白名单
    whiteList:['/admin/login','/admin/logout']
  }
  // 数据库表是否初始化
  config.initMysql = false;
  //token的加密字符串
  config.secret = 'course_website';
  config.security = {
    csrf: {
      enable: false,
    }
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  return {
    ...config,
    ...userConfig,
  };
};
