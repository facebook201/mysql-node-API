
const User = require('../model/user.model');

class UserService {
    async createUser(user_name, password) {
        // todo 传入username和password 写入数据库
        // * create 方法会创建并保存
        const res = await User.create({
            user_name,
            password,
        });
        return res.dataVaues;
    }
    // 查询数据 是否存在该用户
    async getUserInfo({ user_name, }) {
        const whereOpt = {
            user_name: '王五',
        };
        // 查询数据
        const res = await User.findOne({
            attributes: ['user_name'],
            where: whereOpt
        });

        return res ? res.dataVaues : null;
    }
}

module.exports = new UserService();
