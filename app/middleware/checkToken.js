/*中间件的使用策略*/

const jwt = require('jsonwebtoken');
module.exports = options => {
  return async function checkToken(ctx,next){
      if(options.whiteList.indexOf(ctx.request.url) == -1){
        const XToken = ctx.get('X-Token');
        //如果假设没有拿到token值的话
        if(XToken == ''){
          //提示用户需要回到登录页面重新进行登录
          ctx.body = {
            code:40002,
            message:'token为空，请重新登录'
          }
        }else{
          let tokenContent;
          try {
            tokenContent = await jwt.verify(XToken,ctx.app.config.secret);
          }catch(err){
            if(err.message == 'jwt expired'){
              return ctx.body = {
                code:40001,
                message:'token过期，请重新登录'
              }
            }else{
              await next();
            }
          }
          await next();
        }
      }else{
        await next();
      }
  }
}
