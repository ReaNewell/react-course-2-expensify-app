import selectExpensesTotal from '../../selectors/expensesTotal';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const result = selectExpensesTotal([]);
    expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
    const expense = [{
        id: '1',
        description: 'gum',
        note: "",
        amount: 195,
        createdAt: 0
    }]
    const result = selectExpensesTotal(expense);
    expect(result).toBe(195);
});

test('should correctly add up multiple expenses', () => {
    const result = selectExpensesTotal(expenses);
    expect(result).toBe(40495);
});