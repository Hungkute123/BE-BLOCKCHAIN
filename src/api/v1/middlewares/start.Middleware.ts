import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';
// import { passportMiddleware } from './passport.Middleware';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';
import config from 'config';

export function startMiddleware (app: Express): void {
	// passportMiddleware(); // use passportjs
	app.use(morgan('combined')); // check api
	app.use(cors()); // open for all cors
	app.use(helmet()); // secure http headers

	// get the last value if have the same key
	app.use(hpp()); // api/user/?a=1&a=2 => req.query.a = ['1', '2']. If we have hpp => req.query.a = '2'

	// limit request from client
	app.enable('trust proxy');
	app.use(
		rateLimit({
			windowMs: 60 * 1000, // 15 minutes
			max: 60, // max is 60 request
		}),
	);

	app.use(express.json()); // req.body-parser

	

	// initialize passport
	
}
