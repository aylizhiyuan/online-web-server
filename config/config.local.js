/*本地的配置文件*/
'use strict';

/*
* @appInfo是一个全局的参数,可以接收一些用户提供的信息
* */
module.exports = appInfo => {
  return {
    mysql:{
        //单数据库信息配置
        client:{
            //host
            host:'localhost',
            //port
            port:'3306',
            //user
            user:'root',
            //password
            password:'lizhiyuan',
            //database
            database:'course',
            multipleStatements: true //必须加上这句话，不然的话就无法执行多条sql语句
        },
        //是否加载到app上,默认关闭
        app:true,
        //是否加载到agent上,默认关闭
        agent:false
    }
  }

}
