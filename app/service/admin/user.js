const Service = require('egg').Service;
class UserService extends Service {
    async getuserbyname(username){
        let result = await this.app.mysql.query(`SELECT * FROM user WHERE username='${username}'`);
        return result[0];
    }
}
module.exports = UserService
