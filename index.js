const BankAccount = require('./src/BankAccount');
const TransactionObject = require('./src/TransactionObject');

// 1. a client makes a deposit of 1000 on 10-01-2012
// 2. a deposit of 2000 on 13-01-2012
// 3. a withdrawal of 500 on 14-01-2012
// 4. she prints her bank statement
// 5. she would see

//date       || credit  || debit  || balance
// 14 /01 / 2012 ||         || 500.00 || 2500.00
// 13 /01 / 2012 || 2000.00 ||        || 3000.00
// 10 /01 / 2012 || 1000.00 ||        || 1000.00


const transaction1 = new TransactionObject('deposit', 500, 222);
const transaction2 = new TransactionObject('withdraw', 100, 222);
const bankacc1 = new BankAccount();

bankacc1.transactionHandler(transaction1);

bankacc1.transactionHandler(transaction2);