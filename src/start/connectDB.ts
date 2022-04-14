import mongoose from 'mongoose';
import config from 'config';

// const URL = config.get('db');
const URL: any = process.env.DB_HOST;

export const connectDB = async function () {
	await mongoose.connect(URL, {
		useFindAndModify: false,
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	});
	console.log(`Connected to success`);
};
