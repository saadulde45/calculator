const ROW_ONE = ["AC", "+/-", "%"]
const ROW_TWO = ["7", "8", "9"];
const ROW_THREE = ["4", "5", "6"];
const ROW_FOUR = ["1", "2", "3"];
const ROW_FIFTH = ["00", "0", "."];

const Constants = {
    EMPTY_RESULT: {
        "numberString": '0',
        "currentNumber": '0',
        "operation": null
    },
    ZERO: '0',
    DOUBLE_ZERO: '00',
    ALL_CLEAR: 'AC',
    DECIMAL: '.',
    EQUAL: '=',
    NEGATE: "+/-",
    IsNumber: (string) => {
        return /[0-9]+/.test(string);
    },
    OPERATION_REGEX: /[+-/*]+$/g,
    NUMBER_REGEX: /[0-9]+$/,
    NUMBER_LAYOUT: [ROW_ONE, ROW_TWO, ROW_THREE, ROW_FOUR, ROW_FIFTH],
    ROW_OPERATION: ["/", "*", "+", "-", "="],
    SUPPORTED_OPERATIONS: ["/", "*", "+", "-", "%"]
}

export default Constants;