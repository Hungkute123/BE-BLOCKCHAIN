import { Express } from 'express';
import transactionRouter from './routersApi/transaction.Route';
import walletRouter from './routersApi/wallet.Route';



export function routersApi (app: Express): void {
	app.use('/api/wallet',walletRouter)
	app.use('/api/wallet/tx',transactionRouter)
}
