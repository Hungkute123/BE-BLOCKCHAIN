import { Schema, model } from 'mongoose';
interface Chain {
    chain: string,
    difficulty: number,
    pendingTransaction: string[],
    miningReward: number,
}
const ChainSchema = new Schema<Chain>({
    chain: { type: String, require: true },
    difficulty:{ type: Number, require: true },
    pendingTransaction: [],
    miningReward:{ type: Number, require: true },
});

export const ChainModel = model<Chain>('chain', ChainSchema);
