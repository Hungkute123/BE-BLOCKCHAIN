"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routersApi = void 0;
const class_Route_1 = __importDefault(require("./routersApi/class.Route"));
function routersApi(app) {
    app.use('/api/class', class_Route_1.default);
}
exports.routersApi = routersApi;
