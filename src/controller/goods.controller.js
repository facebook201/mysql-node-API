

class GoodsController {
    // 上传
    async upload(ctx, next) {
        ctx.body = '上传成功';
    }
}

module.exports = new GoodsController();

