import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense( 'red', {note: "hello"});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'red',
        updates: {
            note: 'hello'
        }
    })
});

test('should setup add expense action object', () => {
    const expenseData = {
        description: 'rent',
        amount: 1200,
        createdAt: 400,
        note: 'this was last week'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            amount: 0,
            createdAt: 0,
            note: '',
            id: expect.any(String)
        }
    })
});