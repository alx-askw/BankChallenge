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
    let data = new Date()
    let transObject1;
    let transObject2;
    let transObject3;
    beforeEach(function () {
        transObject1 = new TransactionObject;
        transObject2 = new TransactionObject('deposit', 100);
        transObject3 = new TransactionObject('deposit', 100, '15/06/2012');
    })

    afterEach(function () {
        transObject1 = undefined;
        transObject2 = undefined;
        transObject3 = undefined;
    })

    //perhaps this could be handled differently, with it returning an error on a failed transaction
    //Can't test private fields like the transactionHistory
    it('Test 1: if not date is supplied, default date given', function () {
        expect(transObject2.getDate()).toEqual(data.toLocaleDateString('en-GB'));
    });
    it('Test 2: if data supplied, it\'s formatted correctly', function () {
        expect(transObject3.getDate()).toEqual('15/06/2012');
    });

});