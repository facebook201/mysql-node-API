
const Router = require('koa-router');
const fs = require('fs');
const { register, login } = require('../controller/user.controller');
const { cryptPassword } = require('../middleware/user.middleware');


const router = new Router({ prefix: '/user' });


// 路由找到对应的控制器来处理
router.post('/register', cryptPassword, register);
router.post('/login', login);
// 修改密码
router.patch('/modifyPassword', (ctx, next) => {
    ctx.body = '修改密码成功！';
});

module.exports = router;
