class BankAccount {

    #accountBalance;
    #transactionHistory;

    //brief note: transactionHandle is here. if nothing is passed then automatically undefined, other wise deposit/withdraw
    constructor(accountBalance = 0, transactionHistory = []) {
        this.#accountBalance = accountBalance;
        this.#transactionHistory = transactionHistory;

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
        if (this.#validWithdraw(amount)) {
            this.#accountBalance = this.#accountBalance - amount;
        };
    }

    historyHandler(transaction) {
        this.#transactionHistory.push([transaction, this.#accountBalance]);
        // console.log(this.#transactionHistory);
    }


    //a small refactor for readability
    #validWithdraw(amount) {
        return (typeof amount === 'number' && (this.#accountBalance - amount) > 0 && amount > 0)
    }

    getTransArray() {
        return this.#transactionHistory;
    }

    printStatement(printer) {
        // printer(this.#transactionHistory.reverse())
        console.log(printer(this.#transactionHistory.reverse()));
    }

    consolePrinter() {

    }

    //refactored this with ternaries :)
    transactionHandler(transaction) {
        transaction.getType() === 'deposit' && this.#deposit(transaction.getAmount()); //deposit
        transaction.getType() === 'withdraw' && this.#withdraw(transaction.getAmount()); //withdraw
        this.historyHandler(transaction);
    };
};
module.exports = BankAccount; 