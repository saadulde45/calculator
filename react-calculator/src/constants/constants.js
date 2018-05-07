const ROW_ONE = ["7", "8", "9"];
const ROW_TWO = ["4", "5", "6"];
const ROW_THREE = ["1", "2", "3"];
const ROW_FOUR = [".", "0", "="];

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
    NUMBER_REGEX: /[0-9]+$/,
    NUMBER_LAYOUT: [ROW_ONE, ROW_TWO, ROW_THREE, ROW_FOUR],
    ROW_OPERATION: ["AC","/", "*", "+", "-"]
}

export default Constants;