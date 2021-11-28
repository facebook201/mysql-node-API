
const User = require('../model/user.model');

class UserService {
    async createUser(user_name, password) {
        const rand = Math.floor(Math.random() * 100);
        // todo 传入username和password 写入数据库
        // * create 方法会创建并保存
        const res = await User.create({
            user_name,
            password: `${password}${rand}`,
        });
        return res.dataValues;
    }
    // 查询数据 是否存在该用户
    async getUserInfo({ user_name }) {
        const whereOpt = {
            user_name: '',
        };
        // 查询数据
        const res = await User.findOne({
            attributes: ['user_name'],
            where: whereOpt
        });

        return res ? res.dataValues : null;
    }
}

module.exports = new UserService();
