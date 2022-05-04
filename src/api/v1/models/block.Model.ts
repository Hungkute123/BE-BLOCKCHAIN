import { Schema, model } from 'mongoose';
interface Block {
    previousHash: string,
    timestamp: string,
    nonce: number,
    hash: string,
}
const BlockSchema = new Schema<Block>({
    previousHash: { type: String, require: true },
    timestamp: { type: String, require: true },
    nonce: { type: Number, require: true },
    hash: { type: String, require: true },
});

export const BlockModel = model<Block>('block', BlockSchema);
