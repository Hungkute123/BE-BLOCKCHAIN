import { Request, Response, NextFunction } from 'express';

export function asyncMiddleware (handler: Function): any {
	return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			await handler(req, res);
			return;
		} catch (error) {
			next(error);
			return;
		}
	};
}
