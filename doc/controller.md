

### 项目拆分

> controller 控制层 处理路由

> service 处理请求过来的数据

```js
// 控制层
async register(ctx, next) {
    const { user_name, password } = ctx.request.body;
    // 操作数据库
    // todo service 层面
    const res = await createUser(user_name, password);
    console.log(res);
    ctx.body = ctx.request.body;
}


```