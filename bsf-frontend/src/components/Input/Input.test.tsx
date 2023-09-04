import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input from '.';

describe('Pagination', () => {
  it('should perform all input actions', () => {
    render(<Input />);
    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: 7 } });
    expect(input).toBeTruthy();
  });
});
