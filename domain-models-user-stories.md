# Bank Challenge User Stories & Domain Models

## Deposit 
As a client,
I would like to be able to deposit money to my bank account,
So that my money is safe.

Functionality: Add money to account 

Domain Model:

Objects | Properties | Messages | Output
--------|------------|----------|-------
transactionHandler |            | deposit(int) | @void
bankAccount   | balance@int            | deposit(amount)          | @int

Tests:

-Balance is increased by the correct amount
-No depositing minus numbers
-

## Withdraw
As a client,
I would like to be able to withdraw my money from my bank account,
So that I can spend my money.

Functionality: Remove money from account

Domain Model:

Objects | Properties | Messages | Output
--------|------------|----------|-------
bankAccount   | balance@int | withdraw(amount), deposit(amount)| @int

Tests:

-Balance is decreased by the correct amount

## Not withdrawing more money than the account has
As the bank manager,
I would like users to only withdraw money they have,
So that I don't lose money.

Functionality: Don't let the the balance go below zero (think about how to handle this. To withdraw as much as possible before hitting 0 or refusing the transaction outright).

Domain Model:

Objects | Properties | Messages | Output
--------|------------|----------|-------
bankAccount | balance            | validTransaction()  | @void 
transactionHandler   |        | deposit(amount), withdraw(amount)          | 

Tests:

-Balance doesn't go below zero

## Keeping history of transactions
As a client, 
I would like to keep a history of each transaction,
So that I see where I spent my money.

Functionality: Keep an array of each transaction.

Domain Model:

Objects | Properties | Messages | Output
--------|------------|----------|-------
bankAccount | transactionHistory@Array\[\]            |  |  @void 
   |        |           | 

Tests:

-History is correctly recorded

## Dating transactions
As I client,
I would like bank statements to include the dat of each transaction,
So that I can track my money.

Functionality: Use JS to get the date and add them to the statement.

Domain Model: 

Objects | Properties | Messages | Output
--------|------------|----------|-------
 |  |  |  
   |        |           | 

Tests:
    -Date is correct
    -Date is formatted correctly
    -Date is called?

## Print Bank Statement
As a client,
I would like to be able to print a bank statement,
So that I can track my money.

Functionality: Print bank statement, formatted correctly, to the console.

Domain Model:

Objects | Properties | Messages | Output
--------|------------|----------|-------
stateMentHandler |            |  | 
   |        |           | 

Tests:

-statement is formatted correctly
## Extended Criteria - formatting the console
As a client,
I would like my statements to be colour coded,
So that it is easier to read.

Functionality: colour code the console log accordingly

Domain Model:

Objects | Properties | Messages | Output
--------|------------|----------|-------
 |            |  | 
   |        |           | 

Tests:

-Visually confirm this?


## Notes:
    -Extended features to consider: 
        -Maybe add an interest modifier
        -Overdraft could be a feature in the future

    -Current Thoughts on classes:
        -Transactions:
            -handles the withdraw and deposit functions
            -static?
        -Statement handler;
            -handles formatting and printing of statement
            -static?
        -bank account:
            -has properties such as:
                -current balance
                -name of account holder
                -array of transactions history (though this could be a class of its own?)
            -each client would have one of these
        -transaction history?
            -this gets added to array in bank account class 
            -has a blueprint on what information is needed in for the history
    -credit = out | debit = in