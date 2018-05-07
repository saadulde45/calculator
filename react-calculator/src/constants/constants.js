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
    },
    OPERATION_REGEX: /[+-/*]+$/g,
    NUMBER_REGEX: /[0-9]+$/
}

export default Constants;