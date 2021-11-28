
### 密码加密



### DOC 文档类型

koa-router 的中间件函数怎么执行？洋葱模型！！！
```js

// 依次执行 cryptPassword, register next() 执行下一个 洋葱模型
app.post('/register', cryptPassword, register)
```