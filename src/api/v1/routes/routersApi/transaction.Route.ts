import { Router, Request, Response } from 'express';
const transactionRouter = Router();

// Middleware

// Controller
import { transactionController } from '../../controllers/transacton.Controller';


//-------------------------------------------- api/products/... -------------------------------

//--------------------------------------------GET------------------------------------------
transactionRouter.get('/my-transaction',transactionController.transactionOfAddress);
transactionRouter.get('/pending-tx',transactionController.pendingTransaction);
transactionRouter.get('/mining',transactionController.mining);
//--------------------------------------------POST-----------------------------------------
transactionRouter.post('/send-mc',transactionController.sendMyCoin);

//--------------------------------------------PUT------------------------------------------

//--------------------------------------------DELETE----------------------------------------

export = transactionRouter;
