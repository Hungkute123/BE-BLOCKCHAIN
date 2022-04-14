"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.classController = void 0;
// Interfaces
// Middlewares
const async_Middleware_1 = require("../middlewares/async.Middleware");
// services
const class_Service_1 = require("../services/class.Service");
class ClassController {
    constructor() {
        this.getClassByIDUser = async_Middleware_1.asyncMiddleware((req, res) => __awaiter(this, void 0, void 0, function* () {
            const IDUser = 1;
            const { data, message, status } = yield class_Service_1.classServices.getClassByIDUser(IDUser);
            res.status(status).send({ data, message });
        }));
        this.createClass = async_Middleware_1.asyncMiddleware((req, res) => __awaiter(this, void 0, void 0, function* () {
            const IDUser = 1;
            const CodeClass = req.body.CodeClass || "123457";
            const Title = req.body.Title || "test";
            const Theme = req.body.Theme || "";
            const Part = req.body.Part || "";
            const Image = "https://www.gstatic.com/classroom/themes/img_backtoschool.jpg";
            const Room = req.body.Room || 0;
            const { data, message, status } = yield class_Service_1.classServices.createClass(IDUser, CodeClass, Title, Theme, Part, Image, Room);
            res.status(status).send({ data, message });
        }));
    }
}
exports.classController = new ClassController();
