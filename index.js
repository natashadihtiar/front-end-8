function padString(string, resLength, symbol, flag) {
    if (string.length >= resLength) {
        return string;
    } else if (flag === true) {
        return padString (string, resLength - 1, symbol, flag) + symbol;//eslint-disable-line
    } else {
        return symbol + padString (string, resLength - 1, symbol);//eslint-disable-line
    }
}
const flag = true;
const resLength = 8;
padString('Hello', resLength, '8', flag);
