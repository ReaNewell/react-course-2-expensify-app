import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    )
});

test('should render ExpenseListFilters', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data', () => {
    wrapper.setProps({ 
        filters: altFilters
     });
    expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
    const value = "rent"
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("should sort by date", () => {
    const value = "date";
    wrapper.setProps({ 
        filters: altFilters
     });
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test("should sort by amount", () => {
    const value = "amount";
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test("should handle date changes", () => {
    const changes = {
        startDate: moment(2000),
        endDate: moment(270000)
    };
    wrapper.find('DateRangePicker').prop('onDatesChange')(changes);
    expect(setStartDate).toHaveBeenLastCalledWith(changes.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(changes.endDate);
});

test("should handle date focus changes", () => {
    const focused = 'startDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(focused);
    expect(wrapper.state('calendarFocused')).toBe(focused);
});