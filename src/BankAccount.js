class BankAccount {

    #accountBalance;


    //brief note: transactionHandle is here. if nothing is passed then automatically undefined, other wise deposit/withdraw
    constructor(accountBalance = 0) {
        this.#accountBalance = accountBalance;

    };

    getBalance() {
        return this.#accountBalance;
    };

    deposit(amount) {
        if (typeof amount === 'number' && amount > 0) {
            this.#accountBalance += amount;
        };
    };

    withdraw(amount) {
        if (typeof amount === 'number' && (this.#accountBalance - amount) > 0) {
            this.#accountBalance -= amount;
        };
    }

};

module.exports = BankAccount; 