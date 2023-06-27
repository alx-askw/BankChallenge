class BankAccount {

    #accountBalance;


    //brief note: transactionHandle is here. if nothing is passed then automatically undefined, other wise deposit/withdraw
    constructor(accountBalance = 0) {
        this.#accountBalance = accountBalance;

    };



    getBalance() {
        return this.#accountBalance;
    };

    #deposit(amount) {
        if (typeof amount === 'number' && amount > 0) {
            this.#accountBalance += amount;
        };
    };

    #withdraw(amount) {
        if (typeof amount === 'number' && (this.#accountBalance - amount) > 0 && amount > 0) {
            this.#accountBalance = this.#accountBalance - amount;
        };
    }

    transactionHandler(transaction) {
        if (transaction.getType() === 'deposit') {
            this.#deposit(transaction.getAmount())
        }
        if (transaction.getType() === 'withdraw') {
            this.#withdraw(transaction.getAmount())
        }
        //  console.log((this.#accountBalance - transaction.getAmount()), " | ", (this.#accountBalance - transaction.getAmount()) > 0, " | ", typeof transaction.getAmount());
    };

};

module.exports = BankAccount; 