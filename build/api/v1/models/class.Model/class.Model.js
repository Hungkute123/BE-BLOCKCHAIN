"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassModel = void 0;
const mongoose_1 = require("mongoose");
const ClassSchema = new mongoose_1.Schema({
    IDUser: { type: Number, require: true },
    CodeClass: { type: String, require: true },
    Title: String,
    Theme: String,
    Part: String,
    Image: { type: String, require: true },
    Room: Number,
});
exports.ClassModel = mongoose_1.model('class', ClassSchema);
