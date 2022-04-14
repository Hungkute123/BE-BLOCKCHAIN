"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authCheckLogin = void 0;
const authCheckLogin = (req, res, next) => {
    if (!req.user)
        return res.redirect('/Auth/login');
    else
        return next();
};
exports.authCheckLogin = authCheckLogin;
