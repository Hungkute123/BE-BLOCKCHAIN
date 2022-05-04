import { Express } from 'express';
import walletRouter from './routersApi/wallet.Route';



export function routersApi (app: Express): void {
	app.use('/api/wallet',walletRouter)
}
