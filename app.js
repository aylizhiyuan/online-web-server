const fs = require('fs');
const path = require('path');
//数据库的表初始化，插入一些基本的数据
const sqlContent = fs.readFileSync(path.resolve(__dirname,'./db/course.sql'),'utf-8');
//入口文件自定义启动过程
class AppBootHook {
    constructor(app){
        this.app = app;
    }
    async didLoad(){
        //所有的配置已经加载完毕
        //可以用来加载应用自定义的文件，启动自定义的服务
    }
    async willReady(){
        //所有的插件都已经启动完毕，但是应用整体还未ready
        //可以做一些数据初始化的操作，这些操作成功后才会启动应用
        if(this.app.config.initMysql){
            this.app.mysql.query(sqlContent).then(res=>{
                console.log('import course sql is success');
            }).catch(err=>{
                console.log('import course sql is error');
                console.log(err);
            })
        }
    }
    async didReady(){
        //应用已经启动了
    }
    async serverDidReady(){
        //http服务器已经启动，开始接受外部请求了
    }
}
module.exports = AppBootHook