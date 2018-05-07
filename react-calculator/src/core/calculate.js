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

        if(obj.currentNumber === '0') {
            return {
                numberString: buttonName,
                currentNumber: buttonName,
                operation: null
            };
        }

        // If there is no operator then update the numberString
        return {
            numberString: obj.numberString !== '0' ? obj.numberString + buttonName : buttonName,
            currentNumber: obj.currentNumber + buttonName,
            operation: null
        };
    }

    if (buttonName === '.') {
        
        if(obj.currentNumber === '0' && obj.numberString === '0') {
            return {
                numberString: "0" + buttonName,
                currentNumber: "0" + buttonName,
                operation: null
            };
        }

        if(!obj.currentNumber.includes(buttonName)) {
            let number = obj.currentNumber === "0" ? "0" + buttonName : buttonName;
            return {
                numberString: obj.numberString !== '0' ? obj.numberString + number : number,
                currentNumber: obj.currentNumber + buttonName,
                operation: obj.operation
            }
        } else {
            return obj;
        }
    }

    /* When the user presses operation in quick succession -
     * Replace the previous operation with the current one
     * Assign the new operation to 'operation'
    */
    if (obj.operation || (buttonName !== '=' && obj.numberString.endsWith("."))) {

        return {
            numberString: obj.numberString.substring(0, obj.numberString.length - 1) + buttonName,
            currentNumber: '0',
            operation: buttonName
        }
    }

    if (buttonName === '=') {

        // Return empty when '=' is pressed with no operation
        return (sanitisedString !== '0') ?
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

    // Return the latest changes
    return {
        numberString: obj.numberString + buttonName,
        currentNumber: '0',
        operation: buttonName
    };
}