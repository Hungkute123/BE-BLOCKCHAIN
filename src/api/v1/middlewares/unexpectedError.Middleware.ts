// import winston from 'winston';
import { Request, Response, NextFunction } from 'express';

export function unexpectedError (error: Error, req: Request, res: Response, next: NextFunction) {
	// winston.error(error.message, error);

	res.status(500).send({ messages: [ { server: error.message } ], code: 500 });
}
