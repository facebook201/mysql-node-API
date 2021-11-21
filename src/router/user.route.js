
const Router = require('koa-router');
const { register, login } = require('../controller/user.controller');

const router = new Router({
    prefix: '/users',
});

// GET /users/ 
router.get('/', (ctx) => {
    ctx.body = 'hello users';
});

router.post('/register', register);
router.post('/login', login);

module.exports = router;


