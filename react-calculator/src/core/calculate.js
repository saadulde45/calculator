import operate from './operate';
import Constants from '../constants/constants';

/*
 * Based on the buttonName, the numberString is updated and returned.
 *
 * Result object structure - 
 *   numberString (String)  the entire string the user enters till '='
 *   currentNumber (String) Stores the number entered since the previous operator
 *   operation (String)     operators like +, -
 */

export default function calculate(obj, buttonName) {

    // When user clicks 'AC'
    if (buttonName === Constants.ALL_CLEAR) {
        return Constants.EMPTY_RESULT;
    }

    // When the user clicks any numeric button
    if (Constants.IsNumber(buttonName)) {

        // To handle consecutive 0's entered at the beginning
        if (buttonName === Constants.ZERO && obj.numberString === Constants.ZERO) {
            return {};
        }

        // Replace the currentNumber after user clicks '='
        if (obj.currentNumber === Constants.ZERO && obj.operation === Constants.EQUAL) {
            return {
                numberString: buttonName,
                currentNumber: buttonName,
                operation: null
            };
        }

        // If there is no operator then update the numberString
        return {
            numberString: obj.numberString !== Constants.ZERO ? obj.numberString + buttonName : buttonName,
            currentNumber: obj.currentNumber === Constants.ZERO ? buttonName : obj.currentNumber + buttonName,
            operation: null
        };
    }

    // When the user clicks '.'
    if (buttonName === Constants.DECIMAL) {

        // When the user directly clicks '.', append a 0 before it
        if (obj.currentNumber === Constants.ZERO && obj.numberString === Constants.ZERO) {

            return {
                numberString: Constants.ZERO + buttonName,
                currentNumber: Constants.ZERO + buttonName,
                operation: null
            };
        }

        // Prevent adding multiple decimals
        if (!obj.currentNumber.includes(buttonName)) {
            let number = obj.currentNumber === Constants.ZERO ? Constants.ZERO + buttonName : buttonName;
            return {
                numberString: obj.numberString !== Constants.ZERO ? obj.numberString + number : number,
                currentNumber: obj.currentNumber === Constants.ZERO ? buttonName : obj.currentNumber + buttonName,
                operation: obj.operation
            }
        } else {
            return obj;
        }
    }

    // TODO - Yet to implement '+/-'
    if (buttonName === Constants.NEGATE) {
        return obj;
    }

    /* When the user presses operation in quick succession -
     * Replace the previous operation with the current one
     * Assign the new operation to 'operation'
    */
    if (obj.operation || (buttonName !== Constants.EQUAL && obj.numberString.endsWith(Constants.DECIMAL))) {


        let sanitisedString = obj.numberString;

        // Avoid adding '=' when user directly clicks it after '.' and doesn't remove characters on multiple clicks of '='
        if (obj.numberString.endsWith(Constants.DECIMAL) || Constants.SUPPORTED_OPERATIONS.includes(obj.numberString.slice(-1))) {
            sanitisedString = obj.numberString.substring(0, obj.numberString.length - 1);
        }

        return {
            numberString: buttonName === Constants.EQUAL ? sanitisedString : sanitisedString + buttonName,
            currentNumber: Constants.ZERO,
            operation: buttonName
        }
    }

    // When the user clicks '='
    if (buttonName === Constants.EQUAL) {

        // Return empty when '=' is pressed with no operation
        return (obj.numberString !== Constants.ZERO) ?
            {
                numberString: operate(obj.numberString),
                currentNumber: Constants.ZERO,
                operation: buttonName
            } : Constants.EMPTY_RESULT;
    }

    // Return the latest changes
    return {
        numberString: obj.numberString + buttonName,
        currentNumber: Constants.ZERO,
        operation: buttonName
    };
}