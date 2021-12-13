
const User = require('../model/user.model');

class UserService {
    async createUser(user_name, password, is_admin) {
        const rand = Math.floor(Math.random() * 100);
        // todo 传入 username 和 password 写入数据库
        // * create 方法会创建并保存
        const res = await User.create({
            user_name,
            password: `${password}${rand}`,
            is_admin,
        });
        return res.dataValues;
    }
    // 查询数据 是否存在该用户
    async getUserInfo({ id, user_name, password, is_admin }) {
        const whereOpt = {};

        id && Object.assign(whereOpt, { id });
        user_name && Object.assign(whereOpt, { user_name })
        password && Object.assign(whereOpt, { password })
        is_admin && Object.assign(whereOpt, { is_admin })
        // 查询数据
        const res = await User.findOne({
            attributes: ['id', 'user_name', 'password', 'is_admin'],
            where: whereOpt
        });

        return res ? res.dataValues : null;
    }
}

module.exports = new UserService();
