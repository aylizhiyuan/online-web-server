'use strict';

const md5 = require('md5');
const Controller = require('egg').Controller;

class UserController extends Controller {
  //登录
  async login() {
      let { ctx } = this;
      let username = ctx.request.body.username
      let password = ctx.request.body.password
      //验证用户名/密码是否合法
      //验证省略了
      //检查用户名是否存在
      //所有的对于数据库的操作，我们不在控制器里面完成，我们在数据库直接封装成一个方法
      const res = await ctx.service.admin.user.getuserbyname(username);
      if(res !== undefined){
          //如果存在
          //检查密码是否正确
          if(res.password === md5(password)){
              //生成token
              let token = ctx.service.token.createToken(res.user);
              //最后返回token
              ctx.body = {
                  success:true,
                  message:'登录成功...',
                  token:token
              }
          }else{
              ctx.body = {
                  success:false,
                  message:'密码错误,请重新填写...'
              }
          }
      }else{
          ctx.body = {
              success:false,
              message:'用户名不存在,请重新填写.....'
          }
      }
  }
  //退出
  async logout() {
      let { ctx } = this;
      ctx.body = {
          success:true,
          message:'退出成功'
      }
  }
  //获取用户的信息
  async getInfo(){
        let { ctx } = this;
        console.log(ctx.query.token);
  }
}

module.exports = UserController;
