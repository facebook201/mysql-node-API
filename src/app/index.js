/*
 * @Author: shiyao 
 * @Date: 2021-12-04 19:03:01 
 * @Last Modified by: 
 * @Last Modified time: 2021-12-11 23:24:09
 */

const koa = require('koa');
const serve = require('koa-static');
const KoaBody = require('koa-body');
const router = require('../router');

const app = new koa();

app.use(KoaBody());
app.use(serve(`${__dirname}/static`), { extension: ['html'] });
app.use(router.routes());
app.use(router.allowedMethods());


module.exports = app;
