const BankAccount = require('../src/BankAccount');



describe('Bank Account functions', function () {

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

    it('Test 1: Can deposit money with the deposit()', function () {
        bankAccount1.deposit(100);
        expect(bankAccount1.getBalance()).toBe(100);

    });

    //to stop strings being passed through
    it('Test 2: only numbers can be passed into the deposit', function () {
        bankAccount1.deposit('100');
        expect(bankAccount1.getBalance()).toBe(0);
    });

    //if someone wants to add £1.50 for example
    it('Test 3: Floats can be added', function () {
        bankAccount1.deposit(1.5);
        expect(bankAccount1.getBalance()).toBe(1.5);
    });

    it('Test 4: Deposit does not accept negative number', function () {
        bankAccount1.deposit(100);
        bankAccount1.deposit(-100);
        expect(bankAccount1.getBalance()).toBe(100);
    });

});