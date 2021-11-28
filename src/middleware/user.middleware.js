const bcrypt = require('bcryptjs');


const cryptPassword = async (ctx, next) => {
    const { password } = ctx.request.body;

    const salt = bcrypt.genSaltSync(10);
    // hash 是保存的密文
    const hash = bcrypt.hashSync(password, salt);
    ctx.request.body.password = hash;

    await next();
};

module.exports = {
    cryptPassword
};
