const EC = require('elliptic');
const ec = new EC('secp256k1');
import sha256 from 'crypto-js/sha256';
class Transaction {
    fromAddress: string;
    toAddress: string;
    amount: number;
    timestamp: number;
    txHash: any;
    signature: any;
    constructor(fromAddress: string, toAddress: string, amount: number) {
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
        this.timestamp = Date.now();
        this.txHash = this.calculateHash();
    }

    calculateHash() {
        return sha256(this.fromAddress + this.toAddress + this.amount + this.timestamp).toString();
    }

    signTransaction(signingKey: any) {
        if (signingKey.getPublic('hex') !== this.fromAddress) {
            return;
        }
        const hashTx = this.calculateHash();
        const sig = signingKey.sign(hashTx, 'base64');

        this.signature = sig.toDER('hex');
    }

    isValid() {
        if (this.fromAddress === null) return true;

        if (!this.signature || this.signature.length === 0) {
            return false;
        }

        const publicKey = ec.keyFromPublic(this.fromAddress, 'hex');
        return publicKey.verify(this.calculateHash(), this.signature);
    }
}

export default Transaction;