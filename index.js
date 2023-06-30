const BankAccount = require('./src/BankAccount');
const TransactionObject = require('./src/TransactionObject');
const StatementPrinter = require('./src/StatementPrinter');

// 1. a client makes a deposit of 1000 on 10-01-2012
// 2. a deposit of 2000 on 13-01-2012
// 3. a withdrawal of 500 on 14-01-2012
// 4. she prints her bank statement
// 5. she would see

//date       || credit  || debit  || balance
// 14 /01 / 2012 ||         || 500.00 || 2500.00
// 13 /01 / 2012 || 2000.00 ||        || 3000.00
// 10 /01 / 2012 || 1000.00 ||        || 1000.00


const transaction1 = new TransactionObject('deposit', 1000.00, '10/01/2012');
const transaction2 = new TransactionObject('deposit', 2000.00, '13/01/2012');
const transaction3 = new TransactionObject('withdraw', 500.00, '14/01/2012');
const exampleBankAccount1 = new BankAccount();

exampleBankAccount1.transactionHandler(transaction1);
exampleBankAccount1.transactionHandler(transaction2);
exampleBankAccount1.transactionHandler(transaction3);

exampleBankAccount1.printStatement(StatementPrinter.statementHandler)