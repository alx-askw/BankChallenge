const StatementPrinter = require('../src/StatementPrinter');

describe('StatementHandler tests', function () {


    let mockData = [["a", 1], ["b", 2]];
    let printerSpy;
    let formatterSpy;
    beforeEach(function () {
        printerSpy = spyOn(StatementPrinter, 'statementHandler');
        formatterSpy = spyOn(StatementPrinter, 'stringFormatter');
    })

    afterEach(function () {

    })

    it('Test 1: statement handler is called', function () {
        StatementPrinter.statementHandler(mockData);
        expect(printerSpy).toHaveBeenCalled();
    })

    // it('Test 2: String formatter gets called', function () {
    //     StatementPrinter.statementHandler(mockData);
    //     expect(formatterSpy).toHaveBeenCalledTimes(mockData.length);
    // })

})