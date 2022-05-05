import CryptoBlock from "./cryptoBlock.Classes";
import Transaction from "./transaction.Classes";

class CryptoBlockchain {
    blockchain: CryptoBlock[];
    difficulty: number;
    pendingTransactions: any[];
    miningReward: number;
    constructor() {
        this.blockchain = [this.startGenesisBlock()];
        this.difficulty = 1;
        this.pendingTransactions = [];
        this.miningReward = 2;
    }
    startGenesisBlock() {
        return new CryptoBlock(0, "05/05/2022", [], "0");
    }

    obtainLatestBlock() {
        return this.blockchain[this.blockchain.length - 1];
    }
    addNewBlock(newBlock: CryptoBlock) {
        newBlock.precedingHash = this.obtainLatestBlock().hash;
        //newBlock.hash = newBlock.computeHash();
        newBlock.proofOfWork(this.difficulty);
        this.blockchain.push(newBlock);
    }
    addTransaction(transaction: Transaction) {
        if (!transaction.fromAddress || !transaction.toAddress || !transaction.isValid()) {
            return false;
        }

        this.pendingTransactions.push(transaction);
        return true;
    }
    checkChainValidity() {
        for (let i = 1; i < this.blockchain.length; i++) {
            const currentBlock = this.blockchain[i];
            const precedingBlock = this.blockchain[i - 1];

            if (currentBlock.hash !== currentBlock.computeHash()) {
                return false;
            }
            if (currentBlock.precedingHash !== precedingBlock.hash) return false;
        }
        return true;
    }
    minePendingTransactions(miningRewardAddress: string) {
        const index = Number(this.obtainLatestBlock) + 1;
        let block = new CryptoBlock(index, String(Date.now()), this.pendingTransactions);
        block.proofOfWork(this.difficulty);

        this.blockchain.push(block);

        this.pendingTransactions = [
            new Transaction("0x000", miningRewardAddress, this.miningReward, 0)
        ];
    }
    getBalanceOfAddress(address: string) {
        let balance = 20;

        for (let i = 0; i < this.blockchain.length; i++) {
            const transactions = this.blockchain[i].data;
            for (let j = 0; j < transactions.length; j++) {

                if (transactions[j].fromAddress === address) {
                    balance -= Number(transactions[j].amount);
                    balance -= Number(transactions[j].txFee);
                }

                if (transactions[j].toAddress === address) {
                    balance += Number(transactions[j].amount);
                }

            }
        }
        return balance;
    }

    getTransactionsOfAddress(address: string) {
        let transactionsRes = [];

        for (let i = 0; i < this.blockchain.length; i++) {
            const transactions = this.blockchain[i].data;
            for (let j = 0; j < transactions.length; j++) {

                if (transactions[j].fromAddress === address) {
                    transactionsRes.push(transactions[j]);
                }
                if (transactions[j].toAddress === address) {
                    transactionsRes.push(transactions[j]);
                }
            }
        }

        return transactionsRes;
    }

    getPendingTransactionsOfAddress(address: string) {
        let transactionsRes = [];

        for (let i = 0; i < this.pendingTransactions.length; i++) {
            const transaction = this.pendingTransactions[i];

            if (transaction.fromAddress === address) {
                transactionsRes.push(transaction);
            }
            if (transaction.toAddress === address) {
                transactionsRes.push(transaction);
            }
        }

        return transactionsRes;
    }
}

export default CryptoBlockchain