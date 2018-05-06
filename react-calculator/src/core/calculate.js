import operate from './operate';

/*
 * Based on the buttonName, the result object is updated and returned.
 *
 * Result object structure - 
 *   total (String)      the current total
 *   nextNumber (String) the next number to be used
 *   operation (String)  operators like +, -
 */

export default function calculate(obj, buttonName) {

    let isNumber = function (string) {
        return !!string.match(/[0-9]+/);
    }

    if (buttonName === 'AC') {
        return {
            total: null,
            nextNumber: 0,
            operation: null
        };
    }

    if (isNumber(buttonName)) {

        if (buttonName === '0' && obj.nextNumber === '0') {
            return {};
        }

        // If there is no operator then update nextNumber and clear total
        if (obj.nextNumber) {
            return {
                total: null,
                nextNumber: obj.nextNumber + buttonName,
            };
        }

        // If an operator is present then update nextNumber
        if (obj.operation) {
            return obj.nextNumber ? { nextNumber: buttonName } : { nextNumber: obj.nextNumber + buttonName };
        }

        return {
            nextNumber: buttonName,
            total: null,
        };
    }

    if (buttonName === '.') {

        if (obj.total) {
            return obj.total.includes('.') ? {} : { total: obj.total + '.' };
        }

        if (obj.nextNumber) {
            return obj.nextNumber.includes('.') ? {} : { nextNumber: obj.nextNumber + '.' };
        }

        if (obj.operation) {
            return { nextNumber: '0.' };
        }

        return { total: '0.' };
    }

    if (buttonName === '=') {

        console.log("ans", operate(obj.total, obj.nextNumber, obj.operation));
        // Return empty when '=' is pressed with no operation
        return (obj.nextNumber && obj.operation) ?
            {
                total: operate(obj.total, obj.nextNumber, obj.operation),
                nextNumber: 0,
                operation: null,
            } : 
            {};
    }

    /* When the user presses operation in quick succession -
     * Perform the previous operation and store it in 'total'
     * Assign the new operation to 'operation'
    */
    if (obj.operation) {
        return {
            total: operate(obj.total, obj.nextNumber, obj.operation),
            nextNumber: 0,
            operation: buttonName,
        };
    }

    // Assign the 'operation' when no number is entered
    if (!obj.nextNumber) {
        return { operation: buttonName };
    }

    // Return the latest changes
    return {
        total: obj.nextNumber,
        nextNumber: 0,
        operation: buttonName,
    };
}