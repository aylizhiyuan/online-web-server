const Service = require('egg').Service;
class UserService extends Service {
    async getuserbyname(user){
        let result = await this.app.mysql.query(`SELECT * FROM user WHERE user='${user}'`);
        return result[0];
    }
}
module.exports = UserService
