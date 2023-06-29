const BankAccount = require('../src/BankAccount');



describe('Deposit - Bank Account functions', function () {

    beforeEach(function () {
        bankAccount1 = new BankAccount();
    })

    afterEach(function () {
        bankAccount1 = undefined;
    })

    const mockDepositTransactionFloat = {
        transactionType: 'deposit',
        transactionAmount: 1.5,
        getType: function () {
            return this.transactionType;
        },
        getAmount: function () {
            return this.transactionAmount;
        },
    }

    const mockDepositTransactionNegative = {
        transactionType: 'deposit',
        transactionAmount: -100,
        getType: function () {
            return this.transactionType;
        },
        getAmount: function () {
            return this.transactionAmount;
        },
    }

    const mockDepositTransaction = {
        transactionType: 'deposit',
        transactionAmount: 500,
        getType: function () {
            return this.transactionType;
        },
        getAmount: function () {
            return this.transactionAmount;
        },
    }

    const mockDepositTransactionStringTest = {
        transactionType: 'deposit',
        transactionAmount: '500',
        getType: function () {
            return this.transactionType;
        },
        getAmount: function () {
            return this.transactionAmount;
        },
    }

    let a = true
    it('test spec', function () {
        expect(a).toBe(true);
    });


    //to stop strings being passed through
    it('Test 1: only numbers can be passed into the deposit', function () {
        bankAccount1.transactionHandler(mockDepositTransactionStringTest);
        expect(bankAccount1.getBalance()).toBe(0);
    });

    //if someone wants to add £1.50 for example
    it('Test 2: Floats can be added', function () {
        bankAccount1.transactionHandler(mockDepositTransactionFloat);
        expect(bankAccount1.getBalance()).toBe(1.5);
    });

    it('Test 3: Deposit does not accept negative number', function () {
        bankAccount1.transactionHandler(mockDepositTransaction)
        bankAccount1.transactionHandler(mockDepositTransactionNegative)
        expect(bankAccount1.getBalance()).toBe(500);
    });
});

//###############################################################################

describe('Withdraw - Bank Account functions', function () {

    //for depositing for tests
    const mockDepositTransaction = {
        transactionType: 'deposit',
        transactionAmount: 500,
        getType: function () {
            return this.transactionType;
        },
        getAmount: function () {
            return this.transactionAmount;
        },
    }
    const mockWithdrawTransaction = {
        transactionType: 'withdraw',
        transactionAmount: 500,
        getType: function () {
            return this.transactionType;
        },
        getAmount: function () {
            return this.transactionAmount;
        },
    }
    const mockWithdrawTransactionStringTest = {
        transactionType: 'withdraw',
        transactionAmount: '500',
        getType: function () {
            return this.transactionType;
        },
        getAmount: function () {
            return this.transactionAmount;
        },
    }

    const mockWithdrawTransactionFloat = {
        transactionType: 'withdraw',
        transactionAmount: 1.5,
        getType: function () {
            return this.transactionType;
        },
        getAmount: function () {
            return this.transactionAmount;
        },
    }
    const mockWithdrawTransactionNegative = {
        transactionType: 'withdraw',
        transactionAmount: -100,
        getType: function () {
            return this.transactionType;
        },
        getAmount: function () {
            return this.transactionAmount;
        },
    }
    beforeEach(function () {
        bankAccount1 = new BankAccount();
        bankAccount1.transactionHandler(mockDepositTransaction);
    })

    afterEach(function () {
        bankAccount1 = undefined;
    })

    //to stop strings being passed through
    it('Test 1: only numbers can be passed into the withdraw ', function () {
        bankAccount1.transactionHandler(mockWithdrawTransactionStringTest);
        expect(bankAccount1.getBalance()).toBe(500);
    });

    //if someone wants to withdraw £1.50 for example
    it('Test 2: Floats can be withdraw', function () {
        bankAccount1.transactionHandler(mockWithdrawTransactionFloat);
        expect(bankAccount1.getBalance()).toBe(498.5);
    });

    it('Test 3: Withdraw does not accept negative number', function () {
        expect(bankAccount1.getBalance()).toBe(500);
    });

});

// //###########################################################################

describe('Not withdrawing more than in account has - Bank Account functions', function () {

    const mockWithdrawTransaction = {
        transactionType: 'withdraw',
        transactionAmount: 500,
        getType: function () {
            return this.transactionType;
        },
        getAmount: function () {
            return this.transactionAmount;
        },
    }
    const mockDepositTransaction = {
        transactionType: 'deposit',
        transactionAmount: 100,
        getType: function () {
            return this.transactionType;
        },
        getAmount: function () {
            return this.transactionAmount;
        },
    }
    beforeEach(function () {
        bankAccount1 = new BankAccount();
        bankAccount1.transactionHandler(mockDepositTransaction);
    })

    afterEach(function () {
        bankAccount1 = undefined;
    })

    //perhaps this could be handled differently, with it returning an error on a failed transaction
    it('Test 1: Only allow withdraw if there is enough money in the account to take', function () {
        bankAccount1.transactionHandler(mockWithdrawTransaction);
        expect(bankAccount1.getBalance()).toBe(100);
    });

});

//#######################################################################################

describe('Keeping a history- Bank Account functions', function () {


    const mockDepositTransaction = {
        transactionType: 'deposit',
        transactionAmount: 100,
        getType: function () {
            return this.transactionType;
        },
        getAmount: function () {
            return this.transactionAmount;
        }
    }
    let historySpy;
    beforeEach(function () {
        bankAccount1 = new BankAccount();
        //spies need to be declared in before each
        historySpy = spyOn(bankAccount1, "historyHandler");
        bankAccount1.transactionHandler(mockDepositTransaction);
    })

    afterEach(function () {
        bankAccount1 = undefined;
    })

    //perhaps this could be handled differently, with it returning an error on a failed transaction
    //Can't test private fields like the transactionHistory
    it('Test 1: check if history handler is called', function () {
        expect(historySpy).toHaveBeenCalled();
    });

    // it('Test 2: does length of array increase with each transaction', function () {
    //     expect(bankAccount1.getTransArray().length).toEqual(1);
    // });


});

//#################################################################################

describe('Dating transactions- Bank Account functions', function () {


    const mockDepositTransaction = {
        transactionType: 'deposit',
        transactionAmount: 100,
        getType: function () {
            return this.transactionType;
        },
        getAmount: function () {
            return this.transactionAmount;
        }
    }
    let historySpy;
    beforeEach(function () {
        bankAccount1 = new BankAccount();
        //spies need to be declared in before each
        historySpy = spyOn(bankAccount1, "historyHandler");
    })

    afterEach(function () {
        bankAccount1 = undefined;
    })

    //perhaps this could be handled differently, with it returning an error on a failed transaction
    //Can't test private fields like the transactionHistory
    it('Test 1: check if history handler is called', function () {
        bankAccount1.transactionHandler(mockDepositTransaction);
        expect(historySpy).toHaveBeenCalled();
    });


});


//#################################################################################

describe('Statement Printing - Bank Account functions', function () {


    const mockDepositTransaction = {
        transactionType: 'deposit',
        transactionAmount: 100,
        getType: function () {
            return this.transactionType;
        },
        getAmount: function () {
            return this.transactionAmount;
        }
    }
    let printerSpy;
    beforeEach(function () {
        bankAccount1 = new BankAccount();
        printerSpy = spyOn(bankAccount1, 'printStatement');
    })

    afterEach(function () {
        bankAccount1 = undefined;
    })

    it('Test 1: check if statement printer is called is called', function () {
        bankAccount1.printStatement();
        expect(printStatement).toHaveBeenCalled();
    });


});