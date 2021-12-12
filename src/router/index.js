
const fs = require('fs');
const Router = require('koa-router');

const router = new Router();

// 自动读取所有的 路由 加载进来
fs.readdirSync(__dirname).forEach(file => {
    if (file !== 'index.js') {
        let dir = require('./' + file);
        router.use(dir.routes());
    }
});


module.exports = router;
