import Constants from '../constants/constants';

export default function operate(numberString) {
    
    // Adding extra checks to avoid side effects of eval()
    if (numberString.match(Constants.OPERATION_REGEX) || numberString.match(Constants.NUMBER_REGEX)) {
        // eslint-disable-next-line
        return eval(numberString).toString();
    } else {
        throw Error(`Illegal characters in '${numberString}'`);
    }
}