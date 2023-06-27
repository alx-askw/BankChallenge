const BankAccount = require('../src/BankAccount');



describe('Deposit - Bank Account functions', function () {

    // beforeEach(function () {
    //     let bankAcc = new bankAccount(); 
    // });
    beforeEach(function () {
        bankAccount1 = new BankAccount();
    })

    afterEach(function () {
        bankAccount1 = undefined;
    })

    let a = true
    it('test spec', function () {
        expect(a).toBe(true);
    });


    //to stop strings being passed through
    it('Test 1: only numbers can be passed into the deposit', function () {
        bankAccount1.deposit('100');
        expect(bankAccount1.getBalance()).toBe(0);
    });

    //if someone wants to add £1.50 for example
    it('Test 2: Floats can be added', function () {
        bankAccount1.deposit(1.5);
        expect(bankAccount1.getBalance()).toBe(1.5);
    });

    it('Test 3: Deposit does not accept negative number', function () {
        bankAccount1.deposit(100);
        bankAccount1.deposit(-100);
        expect(bankAccount1.getBalance()).toBe(100);
    });
});

//###############################################################################

describe('Withdraw - Bank Account functions', function () {

    beforeEach(function () {
        bankAccount1 = new BankAccount();
        bankAccount1.deposit(500);
    })

    afterEach(function () {
        bankAccount1 = undefined;
    })

    //to stop strings being passed through
    it('Test 1: only numbers can be passed into the withdraw ', function () {
        bankAccount1.withdraw('100');
        expect(bankAccount1.getBalance()).toBe(500);
    });

    //if someone wants to withdraw £1.50 for example
    it('Test 2: Floats can be withdraw', function () {
        bankAccount1.withdraw(1.5);
        expect(bankAccount1.getBalance()).toBe(498.5);
    });

    it('Test 3: Withdraw does not accept negative number', function () {
        bankAccount1.deposit(-100);
        expect(bankAccount1.getBalance()).toBe(500);
    });

});

//###########################################################################

describe('Not withdrawing more than in account has - Bank Account functions', function () {

    beforeEach(function () {
        bankAccount1 = new BankAccount();
        bankAccount1.deposit(50);
    })

    afterEach(function () {
        bankAccount1 = undefined;
    })

    //perhaps this could be handled differently, with it returning an error on a failed transaction
    it('Test 1: Only allow withdraw if there is enough money in the account to take', function () {
        bankAccount1.withdraw(100);
        expect(bankAccount1.getBalance()).toBe(50);
    });

});

//#######################################################################################

describe('Keeping a history- Bank Account functions', function () {

    beforeEach(function () {
        bankAccount1 = new BankAccount();
        bankAccount1.deposit(50);
    })

    afterEach(function () {
        bankAccount1 = undefined;
    })

    //perhaps this could be handled differently, with it returning an error on a failed transaction
    it('Test 1: Only allow withdraw if there is enough money in the account to take', function () {
        bankAccount1.withdraw(100);
        expect(bankAccount1.getBalance()).toBe(50);
    });

});