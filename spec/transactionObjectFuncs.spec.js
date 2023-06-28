const TransactionObject = require('../src/TransactionObject');

describe('Dating Transactions- transactionObject functions', function () {

    const mockBankAccount = {
        getType: function () {
            return this.transactionType;
        },
        getAmount: function () {
            return this.transactionAmount;
        }
    }
    beforeEach(function () {
        let transObject1 = new TransactionObject
    })

    afterEach(function () {
        transObject1 = undefined;
    })

    //perhaps this could be handled differently, with it returning an error on a failed transaction
    //Can't test private fields like the transactionHistory
    it('Test 1: check if history handler is called', function () {
        bankAccount1.transactionHandler(mockDepositTransaction);
        expect(historySpy).toHaveBeenCalled();
    });


});