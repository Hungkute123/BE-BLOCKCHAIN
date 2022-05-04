import sha256 from 'crypto-js/sha256';
class CryptoBlock {
  index: number;
  timestamp: string;
  data: object;
  precedingHash: string;
  hash: string;
  nonce: number;
  constructor(index: number, timestamp: string, data: object, precedingHash = " ") {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.precedingHash = precedingHash;
    this.hash = this.computeHash();
    this.nonce = 0;
  }

  computeHash() {
    return sha256(
      this.index +
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