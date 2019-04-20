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
}
module.exports = TokenService
