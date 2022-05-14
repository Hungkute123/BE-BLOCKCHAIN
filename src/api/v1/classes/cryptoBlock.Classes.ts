import sha256 from 'crypto-js/sha256';
import Transaction from './transaction.Classes';
class CryptoBlock {
  timestamp: string;
  data: Transaction[];
  precedingHash: string;
  hash: string;
  nonce: number;
  constructor(timestamp: string, data: Transaction[], precedingHash = " ") {
    this.timestamp = timestamp;
    this.data = data;
    this.precedingHash = precedingHash;
    this.hash = this.computeHash();
    this.nonce = 0;
  }

  computeHash() {
    return sha256(
      this.precedingHash +
      this.timestamp +
      JSON.stringify(this.data) +
      this.nonce
    ).toString();
  }

  proofOfWork(difficulty: number) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.computeHash();
    }
  }
}


export default CryptoBlock;