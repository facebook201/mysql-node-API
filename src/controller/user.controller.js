
const { createUser } = require('../service/user.service');

class UserController {
    async register(ctx, next) {
        const { user_name, password } = ctx.request.body;
        // 操作数据库
        const res = await createUser(user_name, password);
        console.log(res);
        ctx.body = ctx.request.body;
    }
    // 登陆
    async login(ctx) {
        ctx.body = '登陆成功！';
    }
}

const user = new UserController();
module.exports = user;
