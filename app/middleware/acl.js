module.exports = options =>{
  return async function acl(ctx,next) {
    console.log(ctx.request.url);
    console.log(ctx.request.method);
    //得到当前的请求的地址和请求方式

    next();
  }
}
