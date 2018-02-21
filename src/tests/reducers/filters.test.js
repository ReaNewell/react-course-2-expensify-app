import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter value', () => {
    const state = filtersReducer(undefined, { type: '@@ITIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount')
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = { type: 'SORT_BY_DATE' }
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date')
});

test("should set text filter", () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'hello' });
    expect(state).toEqual({
        text: 'hello',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test("should set startDate filter", () => {
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: moment(0) });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: moment().endOf('month')
    })
});

test("should set endDate filter", () => {
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: moment(0) });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment(0)
    })
})