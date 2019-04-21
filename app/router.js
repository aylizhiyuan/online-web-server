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
    router.get('/admin/getInfo',controller.admin.user.getInfo);
    //测试权限的问题
    router.get('/admin/delete',controller.admin.user.delete);
    router.get('/admin/update',controller.admin.user.update);
};
