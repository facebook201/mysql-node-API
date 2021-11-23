
const { createUser, getUserInfo } = require('../service/user.service');

class UserController {
    async register(ctx, next) {
        const { user_name, password } = ctx.request.body;
        // 用户名或者密码
        if (!user_name || !password) {
            // 记录信息 收集错误信息 放在 log4 日志
            console.error('用户名或密码为空', ctx.request.body);
            ctx.status = 400;
            ctx.body = {
                code: '10001',
                message: '用户名或密码为空！',
                result: '',
            };
            return;
        }
        // 如果用户存在
        const ress = await getUserInfo({ user_name });
        console.log(ress);
        return;

        // 操作数据库
        const res = await createUser(user_name, password);
        ctx.body = {
            code: 0,
            message: '用户注册成功',
            result: {
                id: res.id,
                user_name: res.user_name,
            },
        };
    }
    // 登陆
    async login(ctx) {
        ctx.body = '登陆成功！';
    }
}

const user = new UserController();
module.exports = user;
