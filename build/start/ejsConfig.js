"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setViewEngine = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const setViewEngine = (app) => {
    app.set('view engine', 'ejs');
    app.set('views', path_1.default.join(__dirname, '../api/v1/views'));
    app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
    app.use('/css', express_1.default.static(path_1.default.join(__dirname, '../public/css')));
    app.use('/js', express_1.default.static(path_1.default.join(__dirname, '../public/js')));
};
exports.setViewEngine = setViewEngine;
