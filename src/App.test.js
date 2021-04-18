
import { render, screen, cleanup, fireEvent } from '@testing-library/react';

import App from './App';

test('Initial state', () => {
    render(<App />);
    expect(screen.getByText(/Safe Withdrawal Retirement Calculator/)).toBeInTheDocument();
    expect(screen.getByTestId(/stock_alloc_pct_label/)).toHaveTextContent('Stocks %: 50');
    expect(screen.getByTestId(/bond_alloc_pct_label/)).toHaveTextContent('Bonds %: 50');
    expect(screen.getByTestId(/withdrawal_fixed_label/)).toHaveTextContent('Fixed %: 2');
    expect(screen.getByTestId(/withdrawal_variable_label/)).toHaveTextContent('Variable %: 2.5');
    expect(screen.getByTestId(/withdrawal_floor_label/)).toHaveTextContent('Floor %: 4');    
    expect(screen.getByTestId(/start_spend/)).toHaveTextContent('4.5');
    expect(screen.getByTestId(/mean_spend/)).toHaveTextContent('5.3');
    expect(screen.getByTestId(/worst_spend/)).toHaveTextContent('2.4');
    expect(screen.getByTestId(/pct_exhausted/)).toHaveTextContent('1.6');

});

test('Click Button 1 (Bengen)', () => {
    render(<App />);
    fireEvent.click(screen.getByTestId(/button1/));
    expect(screen.getByTestId(/stock_alloc_pct_label/)).toHaveTextContent('Stocks %: 50');
    expect(screen.getByTestId(/bond_alloc_pct_label/)).toHaveTextContent('Bonds %: 50');
    expect(screen.getByTestId(/withdrawal_fixed_label/)).toHaveTextContent('Fixed %: 4');
    expect(screen.getByTestId(/withdrawal_variable_label/)).toHaveTextContent('Variable %: 0');
    expect(screen.getByTestId(/withdrawal_floor_label/)).toHaveTextContent('Floor %: 4');
    expect(screen.getByTestId(/start_spend/)).toHaveTextContent('4.0');
    expect(screen.getByTestId(/mean_spend/)).toHaveTextContent('4.0');
    expect(screen.getByTestId(/worst_spend/)).toHaveTextContent('4.0');
    expect(screen.getByTestId(/pct_exhausted/)).toHaveTextContent('0.0');

});

test('Click Button 3 (low risk aversion)', () => {
    render(<App />);
    fireEvent.click(screen.getByTestId(/button3/));
    expect(screen.getByTestId(/stock_alloc_pct_label/)).toHaveTextContent('Stocks %: 75');
    expect(screen.getByTestId(/bond_alloc_pct_label/)).toHaveTextContent('Bonds %: 25');
    expect(screen.getByTestId(/withdrawal_fixed_label/)).toHaveTextContent('Fixed %: 3.5');
    expect(screen.getByTestId(/withdrawal_variable_label/)).toHaveTextContent('Variable %: 1.1');
    expect(screen.getByTestId(/withdrawal_floor_label/)).toHaveTextContent('Floor %: 3.8');
    expect(screen.getByTestId(/start_spend/)).toHaveTextContent('4.6');
    expect(screen.getByTestId(/mean_spend/)).toHaveTextContent('5.3');
    expect(screen.getByTestId(/worst_spend/)).toHaveTextContent('3.8');
    expect(screen.getByTestId(/pct_exhausted/)).toHaveTextContent('0.0');

});

test('Click Button 4 (high risk aversion)', () => {
    render(<App />);
    fireEvent.click(screen.getByTestId(/button4/));
    expect(screen.getByTestId(/stock_alloc_pct_label/)).toHaveTextContent('Stocks %: 88');
    expect(screen.getByTestId(/bond_alloc_pct_label/)).toHaveTextContent('Bonds %: 12');
    expect(screen.getByTestId(/withdrawal_fixed_label/)).toHaveTextContent('Fixed %: 2.6');
    expect(screen.getByTestId(/withdrawal_variable_label/)).toHaveTextContent('Variable %: 3');
    expect(screen.getByTestId(/withdrawal_floor_label/)).toHaveTextContent('Floor %: 3.4');
    expect(screen.getByTestId(/start_spend/)).toHaveTextContent('5.6');
    expect(screen.getByTestId(/mean_spend/)).toHaveTextContent('6.9');
    expect(screen.getByTestId(/worst_spend/)).toHaveTextContent('3.4');
    expect(screen.getByTestId(/pct_exhausted/)).toHaveTextContent('0.0');

});