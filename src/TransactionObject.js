class TransactionObject {
    #transactionType;
    #transactionAmount;
    #transactionDate;

    //date of transaction needs to be set to something that its either passed through or is defaulted to the current time if no date is supplied
    constructor(transactionType = undefined, transactionAmount = 0, transactionDate = new Date) {
        this.#transactionType = transactionType;
        this.#transactionAmount = transactionAmount;
        this.#transactionDate = transactionDate;
    }
    getType() {
        return this.#transactionType;
    }

    getAmount() {
        return this.#transactionAmount;
    }



};

module.exports = TransactionObject;