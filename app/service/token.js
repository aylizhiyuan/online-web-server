const Service = require('egg').Service;
const jwt = require('jsonwebtoken');
class TokenService extends Service {
    createToken(user_id){
        const token = jwt.sign({
            user_id:user_id
        },this.app.config.secret,{
            expiresIn:"24h"
        });
        return token;
    }
    async saveToken(username,token){
        await this.app.mysql.update('user',{token:token},{where:{username:username}});
    }
}
module.exports = TokenService
