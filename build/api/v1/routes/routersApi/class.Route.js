"use strict";
const express_1 = require("express");
const classRouter = express_1.Router();
// Middleware
// Controller
const class_Controller_1 = require("../../controllers/class.Controller");
//-------------------------------------------- api/products/... -------------------------------
//--------------------------------------------GET------------------------------------------
classRouter.get('/', class_Controller_1.classController.getClassByIDUser);
//--------------------------------------------POST-----------------------------------------
classRouter.post('/', class_Controller_1.classController.createClass);
module.exports = classRouter;
