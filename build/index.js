"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 3rd dependencies
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
/*
Node-config reads configuration files in the ./config directory for the running process,
typically the application root.
This can be overridden by setting the $NODE_CONFIG_DIR environment variable
to the directory containing your configuration files.
It can also be set from node, before loading Node-config:
*/
const path_1 = __importDefault(require("path"));
process.env['NODE_CONFIG_DIR'] = path_1.default.join(__dirname, './config');
// get process.env
dotenv_1.config();
// server initialization
const app = express_1.default();
// connect backend to DB
const connectDB_1 = require("./start/connectDB");
connectDB_1.connectDB();
// set view engine
const ejsConfig_1 = require("./start/ejsConfig");
ejsConfig_1.setViewEngine(app);
// handle Middleware => cors, helmet,...
const start_Middleware_1 = require("./api/v1/middlewares/start.Middleware");
start_Middleware_1.startMiddleware(app);
//  router api
const start_Route_1 = require("./api/v1/routes/start.Route");
start_Route_1.routersApi(app);
const unexpectedError_Middleware_1 = require("./api/v1/middlewares/unexpectedError.Middleware");
app.use(unexpectedError_Middleware_1.unexpectedError);
// listen on port: default port = 5000
const PORT = parseInt(process.env.PORT, 10) || 5000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
