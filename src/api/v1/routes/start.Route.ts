import { Express } from 'express';
import classRouter from './routersApi/class.Route';



export function routersApi (app: Express): void {
	app.use('/api/class',classRouter)
}
