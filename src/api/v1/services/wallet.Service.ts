import CryptoBlockchain from "../classes/cryptoBlockchain.Classes";
import { WalletModel } from "../models/wallet.Model";

class WalletServices {
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
	createWalletWithKeystoreFile = async (version: number,
		id: string,
		address: string,
		crypto: object,
		password: string,
		keyPair: object,
		createdDate: string) => {
		try {
			const createWalletWithKeystoreFile = new WalletModel({
				version: version,
				id: id,
				address: address,
				crypto: crypto,
				password: password,
				keyPair: keyPair,
				createdDate: createdDate
			})
			const saveClass = await createWalletWithKeystoreFile.save();
			const data = { id: saveClass._id, version: saveClass.version, address: saveClass.address, crypto: saveClass.crypto, createdDate: saveClass.createdDate }
			return {
				data: data,
				message: 'Create Wallet Success',
				status: 200,
			};

		} catch (error: any) {
			throw new Error(error.messages);
		}
	};
	accessWalletWithKeystoreFile = async (keystoreFile: any) => {
		try {
			const wallet:any = await  WalletModel.findOne(
				{ _id: keystoreFile.id },
			  );
			if(wallet == null || wallet == ''){
				return {
					data: null,
					message: "Keystore file incorrect",
					status: 400,
				  };
			}else{
				return {
					data: wallet,
					message: 'Access Wallet Success',
					status: 200,
				};
			}

		} catch (error: any) {
			throw new Error(error.messages);
		}
	};
	
}
export const walletServices = new WalletServices()