import { Router, Request, Response } from 'express';
const classRouter = Router();

// Middleware

// Controller
import { classController } from '../../controllers/class.Controller';


//-------------------------------------------- api/products/... -------------------------------

//--------------------------------------------GET------------------------------------------
classRouter.get('/', classController.getClassByIDUser);



//--------------------------------------------POST-----------------------------------------
classRouter.post('/',classController.createClass);

//--------------------------------------------PUT------------------------------------------

//--------------------------------------------DELETE----------------------------------------

export = classRouter;
