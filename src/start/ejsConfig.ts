import express, { Express } from 'express';
import path from 'path';

export const setViewEngine = (app: Express): void => {
	app.set('view engine', 'ejs');
	app.set('views', path.join(__dirname, '../api/v1/views'));

	app.use(express.static(path.join(__dirname, '../public')));
	app.use('/css', express.static(path.join(__dirname, '../public/css')));
	app.use('/js', express.static(path.join(__dirname, '../public/js')));
};
