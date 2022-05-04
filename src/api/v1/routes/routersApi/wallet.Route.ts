import { Router, Request, Response } from 'express';
const walletRouter = Router();

// Middleware

// Controller
import { walletController } from '../../controllers/wallet.Controller';


//-------------------------------------------- api/products/... -------------------------------

//--------------------------------------------GET------------------------------------------
// walletRouter.get('/', walletController.getwalletByIDUser);



//--------------------------------------------POST-----------------------------------------
walletRouter.post('/create/keystore',walletController.createWallet);
walletRouter.post('/access/keystore',walletController.accessWallet);
//--------------------------------------------PUT------------------------------------------

//--------------------------------------------DELETE----------------------------------------

export = walletRouter;
