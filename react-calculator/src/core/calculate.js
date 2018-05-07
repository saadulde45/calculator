import operate from './operate';

/*
 * Based on the buttonName, the numberString is updated and returned.
 *
 * Result object structure - 
 *   numberString (String)  the entire string the user enters till '='
 *   currentNumber (String) Stores the number entered since the previous operator
 *   operation (String)     operators like +, -
 */

export default function calculate(obj, buttonName) {

    console.log("first", obj, buttonName);

    
    const IsNumber = function (string) {
        return /[0-9]+/.test(string);
    };

    if (buttonName === 'AC') {
        return {
            numberString: '0',
            currentNumber: '0',
            operation: null
        };
    }

    if (IsNumber(buttonName)) {

        if (buttonName === '0' && obj.numberString === '0') {
            return {};
        }

        // If there is no operator then update the numberString
        console.log("while setting next number", obj, obj.numberString !== '0' ? obj.numberString + buttonName : buttonName);
        return {
            numberString: obj.numberString !== '0' ? obj.numberString + buttonName : buttonName,
            currentNumber: obj.currentNumber + buttonName,
            operation: null
        };
    }

    /* When the user presses operation in quick succession -
     * Replace the previous operation with the current one
     * Assign the new operation to 'operation'
    */
    console.log("before setting operation", obj);
    if (obj.operation) {
        console.log("while setting operation", obj, {
            numberString: obj.numberString.substring(0, obj.numberString.length - 1) + buttonName,
            currentNumber: '0',
            operation: buttonName
        });

        return {
            numberString: obj.numberString.substring(0, obj.numberString.length - 1) + buttonName,
            currentNumber: '0',
            operation: buttonName
        }
    }

    // if (buttonName === '.') {

    //     if (obj.nextNumber) {
    //         return obj.nextNumber.includes('.') ? {} : { nextNumber: obj.nextNumber + '.' };
    //     }

    //     if (obj.operation) {
    //         return { nextNumber: '0.' };
    //     }

    //     if (obj.numberString) {
    //         return obj.numberString.includes('.') ? {} : { numberString: obj.numberString + '.' };
    //     }

    //     return { numberString: '0.' };
    // }

    if (buttonName === '=') {

        console.log("ans", operate(obj.numberString, obj.operation));
        // Return empty when '=' is pressed with no operation
        return (obj.numberString !== '0') ?
            {
                numberString: operate(obj.numberString),
                currentNumber: '0',
                operation: null
            } :
            {
                numberString: '0',
                currentNumber: '0',
                operation: null
            };
    }

    console.log("returning last return", {
        numberString: obj.numberString + buttonName,
        currentNumber: '0',
        operation: buttonName
    });
    // Return the latest changes
    return {
        numberString: obj.numberString + buttonName,
        currentNumber: '0',
        operation: buttonName
    };
}