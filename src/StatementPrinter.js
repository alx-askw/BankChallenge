
class StatementPrinter {
    static #printingStrings = [];
    static #statementHeader = `date${"".padEnd(11 - 4)}|| credit  || debit  || balance`;

    static statementHandler(transArray) {
        for (let i = 0; i < transArray.length; i++) {
            StatementPrinter.#printingStrings.push(StatementPrinter.#stringFormatter(transArray[i][0], transArray[i][1]))
        }
        return StatementPrinter.#statementFinal();
    }

    static #stringFormatter(string, amount) {
        if (string.getType() === 'withdraw') {
            return `${string.getDate()} ||` + ` ${''.padEnd(7)} ||` + ` ${string.getAmount().toFixed(2)}${''.padEnd(8 - amount.toFixed(2).length)}|| ${amount.toFixed(2)}\n`;
        }
        if (string.getType() === 'deposit') {
            return `${string.getDate()} ||` + ` ${string.getAmount().toFixed(2)}${''.padEnd(7 - amount.toFixed(2).length)} ||` + `${''.padEnd(7)} || ${amount.toFixed(2)}\n`;
        }
    }

    static #statementFinal(arrayOfTransactions) {
        let finalStatement = `${StatementPrinter.#statementHeader}\n`
        StatementPrinter.#printingStrings.forEach(line => { finalStatement += line });
        return finalStatement;

    }


}

module.exports = StatementPrinter;