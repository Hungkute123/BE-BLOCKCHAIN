"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unexpectedError = void 0;
function unexpectedError(error, req, res, next) {
    // winston.error(error.message, error);
    res.status(500).send({ messages: [{ server: error.message }], code: 500 });
}
exports.unexpectedError = unexpectedError;
