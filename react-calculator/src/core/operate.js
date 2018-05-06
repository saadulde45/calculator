export default function operate(numberOne, numberTwo, operation) {
    
    const first = Number.parseFloat(numberOne);
    const second = Number.parseFloat(numberTwo);
    console.log("numbers,", first, second);
    
    if (operation === '+') {
        return (first + second).toString();
    }
    
    if (operation === '-') {
        return (first - second).toString();
    }
}