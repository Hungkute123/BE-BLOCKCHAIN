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
exports.classServices = void 0;
const class_Model_1 = require("../models/class.Model/class.Model");
class ClassServices {
    constructor() {
        this.getClassByIDUser = (IDUser) => __awaiter(this, void 0, void 0, function* () {
            try {
                const classes = yield class_Model_1.ClassModel.find();
                if (classes.length === 0) {
                    return {
                        data: null,
                        message: 'can not find class',
                        status: 400,
                    };
                }
                return {
                    data: classes,
                    message: 'Success',
                    status: 200,
                };
            }
            catch (error) {
                throw new Error(error.messages);
            }
        });
        this.createClass = (IDUser, CodeClass, Title, Theme, Part, Image, Room) => __awaiter(this, void 0, void 0, function* () {
            try {
                const createClass = new class_Model_1.ClassModel({
                    IDUser: IDUser,
                    CodeClass: CodeClass,
                    Title: Title,
                    Theme: Theme,
                    Part: Part,
                    Image: Image,
                    Room: Room,
                });
                const saveClass = yield createClass.save();
                return {
                    data: saveClass,
                    message: 'Create Class Success',
                    status: 200,
                };
            }
            catch (error) {
                throw new Error(error.messages);
            }
        });
    }
}
exports.classServices = new ClassServices();
