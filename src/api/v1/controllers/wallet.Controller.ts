// dependencies
import { Request, Response } from "express";
import { parse } from "path/posix";
import bcrypt from "bcrypt";
const EC = require('elliptic');
const ec = new EC.ec("secp256k1");
// Interfaces

// Middlewares
import { asyncMiddleware } from "../middlewares/async.Middleware";

// services
import { walletServices } from "../services/wallet.Service";

class WalletController {
    //   getClassByIDUser = asyncMiddleware(
    //     async (req: Request, res: Response): Promise<void> => {
    //       const IDUser: number = 1;
    //       const { data, message, status } = await classServices.getClassByIDUser(
    //         IDUser
    //       );
    //       res.status(status).send({ data, message });
    //     }
    //   );
    createWallet = asyncMiddleware(
        async (req: Request, res: Response): Promise<void> => {
            const date = new Date().toISOString();
            const version: number = 1 || req.body.version;
            const id: string = '';
            const address: string = req.body.address;
            const crypto: object = { "ciphertext": "31025498fbf9db29f6c169b60cb91deb0bf44711a607067fc89482458138b1da", "cipherparams": { "iv": "372578228688909ec1dd1e8ff366b0cf" }, "cipher": "aes-128-ctr", "kdf": "scrypt", "kdfparams": { "dklen": 32, "salt": "fba65d7ebae2452bb2e61d74e50cd97da40f7d84b643c135cb5a8634a36b853c", "n": 131072, "r": 8, "p": 1 }, "mac": "c415d1e66631a1e162c4e9613158fce196b672d0618de591a4633c5553777bdf" } || req.body.crypto;
            const password: string = bcrypt.hashSync(req.body.password, Number(process.env.ROUNDS));
            const generateKeyPair = ec.genKeyPair();
            const keyPair: object = { publicKey: generateKeyPair.getPublic('hex'), privateKey: generateKeyPair.getPrivate('hex') };
            const dateCreated: string = date;
            const { data, message, status } = await walletServices.createWalletWithKeystoreFile(
                version,
                id,
                address,
                crypto,
                password,
                keyPair,
                dateCreated
            );
            res.status(status).send({ data, message });
        }
    );
    accessWallet = asyncMiddleware(
        async (req: Request, res: Response): Promise<void> => {
            const keystoreFile: any = req.body.keystoreFile;
            const password: string = req.body.password;
            const { data, message, status } = await walletServices.accessWalletWithKeystoreFile(
                keystoreFile
            );
            if (data === null) {
                res.status(400).send({ data: null, message: 'Keystore file incorrect' });
            }
            else if (data != null) {
                const keystore = { id: data._id, version: data.version, address: data.address, crypto: data.crypto, createdDate: data.createdDate }
                if (data._id != keystoreFile.id || bcrypt.compareSync(password, data.password) === false) {
                    // console.log( JSON.stringify(String(keystoreFile.content)))
                    // console.log(JSON.stringify(keystore))
                    // console.log(String(keystoreFile.content) != JSON.stringify(keystore))
                    // console.log(bcrypt.compareSync(password, data.password))
                    res.status(400).send({ data: null, message: 'KeystoreFile incorrect' });
                }
                else {
                    res.status(status).send({ data, message: 'Access wallet success' });
                }
            }
        }
    );
    walletBalance = asyncMiddleware(
        async (req: Request, res: Response): Promise<void> => {
            const myCoin = req.app.locals.myCoin;
            const publicKey = req.query.publickey;
            const balance = myCoin.getBalanceOfAddress(publicKey)
            res.status(200).send({ data: balance, message: 'Get wallet balance success' });
        } 
    );
}
export const walletController = new WalletController();
