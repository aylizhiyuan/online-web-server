'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    //登录
    router.post('/admin/login',controller.admin.user.login);
    //退出
    router.get('/admin/logout',controller.admin.user.logout);
    //获取用户的信息
    router.get('/admin/user',controller.admin.user.getInfo);
};
