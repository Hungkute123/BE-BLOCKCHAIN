import { Schema, model } from 'mongoose';
interface Transaction {
    fromAddress: string,
    toAddress: string,
    amount: string,
    timestamp: string,
    txtHash: string
}
const TransactionSchema = new Schema<Transaction>({
    fromAddress: { type: String, require: true },
    toAddress: { type: String, require: true },
    amount: { type: String, require: true },
    timestamp: { type: String, require: true },
    txtHash: { type: String, require: true }
});

export const TransactionModel = model<Transaction>('transaction', TransactionSchema);
