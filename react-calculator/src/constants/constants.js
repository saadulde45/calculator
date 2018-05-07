const Constants = {
    EMPTY_RESULT: {
        "numberString": '0',
        "currentNumber": '0',
        "operation": null
    },
    ZERO: '0',
    ALL_CLEAR: 'AC',
    DECIMAL: '.',
    EQUAL: '=',
    IsNumber: (string) => {
        return /[0-9]+/.test(string);
    }
}

export default Constants;