import { Schema, model } from 'mongoose';
interface Wallet {
    version: number,
    id: string,
    address: string,
    crypto: object,
    password: string,
    keyPair: object,
    createdDate: string,
}
const WalletSchema = new Schema<Wallet>({
    version: { type: Number, require: true },
    id: { type: String, require: true },
    address: { type: String, require: true },
    crypto: { type: Object, require: true },
    password: { type: String, require: true },
    keyPair: { type: Object, require: true },
    createdDate: { type: String, require: true }
});

export const WalletModel = model<Wallet>('wallet', WalletSchema);
