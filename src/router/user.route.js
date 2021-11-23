
const Router = require('koa-router');
const { register, login } = require('../controller/user.controller');

const router = new Router({
    prefix: '/user',
});

// GET /users/ 
router.get('/', (ctx) => {
    ctx.body = 'hello user';
});

// 路由找到对应的控制器来处理
router.post('/register', register);
router.post('/login', login);

module.exports = router;


