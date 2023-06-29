const { dodgerblue } = require("color-name");

class StatementPrinter {
    static #printingStrings = [];
    static statementHandler(transArray) {
        for (let i = 0; i < transArray.length; i++) {
            StatementPrinter.#printingStrings.push(StatementPrinter.#stringFormatter(transArray[i][0], transArray[i][1]))
        }
        return StatementPrinter.#printingStrings;
    }

    static #stringFormatter(string, amount) {
        let formattedString;
        if (string.getType() === 'withdraw') {
            formattedString = `${string.getDate()} ||` + ` ${''.padEnd(7)} ||` + ` ${string.getAmount().toFixed(2)}${''.padEnd(8 - amount.toFixed(2).length)}|| ${amount.toFixed(2)}`
        }
        if (string.getType() === 'deposit') {
            formattedString = `${string.getDate()} ||` + ` ${string.getAmount().toFixed(2)}${''.padEnd(7 - amount.toFixed(2).length)} ||` + `${''.padEnd(7)} || ${amount.toFixed(2)}`
        }
        return formattedString;
    }


}

module.exports = StatementPrinter;