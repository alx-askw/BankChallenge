class StatementPrinter {
    static #printingStrings = [];
    static #statementHeader = `date${"".padEnd(11 - 4)}|| credit  || debit  || balance`;

    static statementHandler(transArray) {
        for (let i = 0; i < transArray.length; i++) {
            StatementPrinter.#printingStrings.push(StatementPrinter.stringFormatter(transArray[i][0], transArray[i][1]))
        }
        return StatementPrinter.statementFinal();
    }

    static stringFormatter(string, amount) {
        if (string.getType() === 'withdraw') { return `${string.getDate()} ||` + ` ${''.padEnd(7)} ||` + ` \x1b[31m${string.getAmount().toFixed(2)}\x1b[0m${''.padEnd(8 - amount.toFixed(2).length)}|| ${amount.toFixed(2)}\n`; }
        if (string.getType() === 'deposit') { return `${string.getDate()} ||` + ` \x1b[32m${string.getAmount().toFixed(2)}${''.padEnd(7 - amount.toFixed(2).length)}\x1b[0m ||` + `${''.padEnd(7)} || ${amount.toFixed(2)}\n`; }
    }

    static statementFinal() {
        let finalStatement = `${StatementPrinter.#statementHeader}\n`
        StatementPrinter.#printingStrings.forEach(line => { finalStatement += line });
        return finalStatement;

    }


}

module.exports = StatementPrinter;