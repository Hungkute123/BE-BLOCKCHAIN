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
import { transactionServices } from "../services/transaction.Service";
import Transaction from "../classes/transaction.Classes";

class TransactionController {

    sendMyCoin = asyncMiddleware(
        async (req: Request, res: Response): Promise<void> => {
            const myCoin = req.app.locals.myCoin;
            const privateKey = req.body.privateKey;
            const keyPair = ec.keyFromPrivate(privateKey);
            const toAddress = req.body.toAddress;
            const fromAddress = keyPair.getPublic("hex");
            const amount = req.body.amount;
            const txFee = req.body.txFee
            const balance = myCoin.getBalanceOfAddress(fromAddress);
            if (amount < 0 || amount > balance) {
                res.status(200).send({ data: null, message: 'Amount not available' });
            }

            const tx = new Transaction(fromAddress, toAddress, amount, txFee)
            tx.signTransaction(keyPair);
            if (!myCoin.addTransaction(tx)) { res.status(400).send({ data: null, message: 'Send failed' }); }

            res.status(200).send({ data: { id: tx.txHash }, message: 'Send is pending' });
        }
    );
    transactionOfAddress = asyncMiddleware(
        async (req: Request, res: Response): Promise<void> => {
            const myCoin = req.app.locals.myCoin;
            const wallet = req.query.wallet;
            const transactions = myCoin.getTransactionsOfAddress(wallet);

            res.status(200).send({ data: transactions, message: 'Get transaction success' });
        }
    );
    pendingTransaction = asyncMiddleware(
        async (req: Request, res: Response): Promise<void> => {
            const myCoin = req.app.locals.myCoin;
            const wallet = req.query.wallet;
            const transactions = myCoin.getPendingTransactionsOfAddress(wallet);

            res.status(200).send({ data: transactions, message: 'Get pending transaction of address succcess' });
        }
    );
    mining = asyncMiddleware(
        async (req: Request, res: Response): Promise<void> => {
            const myCoin = req.app.locals.myCoin;
            const wallet = req.query.wallet;
            myCoin.minePendingTransactions(wallet);

            res.status(200).send({ message: 'Mining success' });
        }
    );
}
export const transactionController = new TransactionController();
