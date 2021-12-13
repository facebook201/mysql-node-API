const jwt = require('jsonwebtoken');
const { createUser, getUserInfo } = require('../service/user.service');

const { JWT_SECRET } = require('../config/config.default');
class UserController {
    async register(ctx, next) {
        const { user_name, password, is_admin } = ctx.request.body;
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
        const userInfo = await getUserInfo({ user_name });
        if (userInfo) {
            ctx.status = 409;
            ctx.body = {
                code: '10409',
                message: `${userInfo.user_name}已经存在!`,
                result: '',
            };
            return;
        }

        // 操作数据库
        const res = await createUser(user_name, password, is_admin);
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
        const { user_name } = ctx.request.body;
        try {
            // 从返回结果中剔除 password 属性，将剩下的属性放到 res 对象中
            const { password, ...resUser } = await getUserInfo({ user_name });
            ctx.body = {
                code: 0,
                message: '用户登录成功！',
                result: {
                    // 登录返回一个 token
                    token: jwt.sign(resUser, JWT_SECRET, { expiresIn: '1d' }),
                }
            };
        } catch(err) {
            console.log(err)
        }
    }
}

const user = new UserController();
module.exports = user;
