
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config.default');

const {
    tokenExpiredError,
    invalidToken,
    hasNotAdminPermission,
} = require('../constant/err.type');

const auth = async (ctx, next) => {
    const { authorization = '' } = ctx.request.header;
    const token = authorization.replace('Beaer ', '');
    try {
        const user = jwt.verify(token, JWT_SECRET);
        console.log(user);
        ctx.state.user = user;
    } catch(err) {
        switch(err.name) {
            case 'TokenExpiredError':
                return ctx.app.emit('error', tokenExpiredError, ctx);
            case 'JsonWebTokenError':
                return ctx.app.emit('error', invalidToken, ctx);
        }
    }
    await next();
};

const hasAdminPermission = async (ctx, next) => {
    const { is_admin } = ctx.state.user;
    if (!is_admin) {
        return ctx.app.emit('error', hasNotAdminPermission, ctx);
    }
    await next();
};

module.exports = {
    auth,
    hasAdminPermission,
};


