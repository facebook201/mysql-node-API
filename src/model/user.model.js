(async () => {
    const { DataTypes } = require('sequelize');
    const seq = require('../db/seq'); 
    
    // 创建 模型
    const User = seq.define("user", {
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            comment: '用户名，唯一',
        },
        password: {
            type: DataTypes.CHAR(64),
            allowNull: false,
            comment: '密码',
        },
        is_admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0,
            comment: '是否是管理员 0：不是管理员',
        }
    });
    // await User.sync({ force: true });
    module.exports = User;
})();


