export default (expenses) => {
    if (expenses.length != 0) {
        const reducer = (accumalator, currentValue) => accumalator + currentValue;

        const total = expenses.map((expense) => expense.amount);
        return total.reduce(reducer);
    } else {
        return 0;
    }
}