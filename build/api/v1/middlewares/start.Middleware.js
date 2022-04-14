"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startMiddleware = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const hpp_1 = __importDefault(require("hpp"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const morgan_1 = __importDefault(require("morgan"));
function startMiddleware(app) {
    // passportMiddleware(); // use passportjs
    app.use(morgan_1.default('combined')); // check api
    app.use(cors_1.default()); // open for all cors
    app.use(helmet_1.default()); // secure http headers
    // get the last value if have the same key
    app.use(hpp_1.default()); // api/user/?a=1&a=2 => req.query.a = ['1', '2']. If we have hpp => req.query.a = '2'
    // limit request from client
    app.enable('trust proxy');
    app.use(express_rate_limit_1.default({
        windowMs: 60 * 1000,
        max: 60, // max is 60 request
    }));
    app.use(express_1.default.json()); // req.body-parser
    // initialize passport
}
exports.startMiddleware = startMiddleware;
