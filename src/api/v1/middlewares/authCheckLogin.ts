import { Response, Request, NextFunction } from 'express';
export const authCheckLogin = (req: Request, res: Response, next: NextFunction): void => {
	if (!req.user) return res.redirect('/Auth/login');
	else return next();
};
