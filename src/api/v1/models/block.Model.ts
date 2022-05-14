import { Schema, model } from 'mongoose';
interface Block {
    timestamp: string;
    data: object[];
    precedingHash: string;
    hash: string;
    nonce: number;
}
const BlockSchema = new Schema<Block>({
    timestamp: String,
    data: [],
    precedingHash: String,
    hash: String,
    nonce: Number,
    // previousHash: { type: String, require: true },
    // timestamp: { type: String, require: true },
    // nonce: { type: Number, require: true },
    // hash: { type: String, require: true },
});

export const BlockModel = model<Block>('block', BlockSchema);
