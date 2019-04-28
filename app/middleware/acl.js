const casbin = require('casbin');
const jwt = require('jsonwebtoken');
module.exports = options =>{
  return async function acl(ctx,next) {
    const enforcer = await casbin.newEnforcer('app/acl/acl_model.conf','app/acl/acl_policy.csv');
    if(options.whiteList.indexOf(ctx.request.path) == -1){
      //得到当前的请求的地址和请求方式
      const XToken = ctx.get('X-Token');
      //通过token得到登录用户的名称
      const sub = jwt.decode(XToken).user_id;
      const obj = ctx.request.path;
      const act = ctx.request.method;
      if(enforcer.enforce(sub,obj,act) == true){
        //有访问的权限的时候
        await next();
      }else{
        //无访问权限的时候
        return ctx.body = {
          code:50000,
          message:'您没有此权限,请联系管理员'
        }
      }
    }else{
      await next();
    }
  }
}
