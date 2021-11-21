const { Sequelize } = require('sequelize');
const {
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_DB,
    MYSQL_PWD,
} = require('../config/config.default');

// 实例化
/**
 * 数据库相关
 */
const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
    host: MYSQL_HOST,
    dialect: 'mysql',
});

seq.authenticate().then(res => {
    console.log('连接成功');
}).catch(err => {
    console.log('连接失败', err);
});


module.exports = seq;


