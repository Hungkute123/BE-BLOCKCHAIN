import { TransactionModel } from "../models/transaction.Model";

class TransactionServices {
	// getClassByIDUser = async (IDUser: number) => {
	// 	try {
	// 		const classes = await ClassModel.find();
	// 		if (classes.length === 0) {
	// 			return {
	// 				data: null,
	// 				message: 'can not find class',
	// 				status: 400,
	// 			};
	// 		}
	// 		return {
	// 			data: classes,
	// 			message: 'Success',
	// 			status: 200,
	// 		};
	// 	} catch (error: any) {
	// 		throw new Error(error.messages);
	// 	}
	// };
	
}
export const transactionServices = new TransactionServices()