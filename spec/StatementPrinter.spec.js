const StatementPrinter = require('../src/StatementPrinter');

describe('StatementHandler tests', function () {
    let printerSpy;
    beforeEach(function () {
        printerSpy = spyOn(StatementPrinter, 'statementHandler');
    })

    afterEach(function () {

    })

    it('Test 1: statement handler is called', function () {
        expect(printerSpy).toHaveBeenCalled();
    })

})