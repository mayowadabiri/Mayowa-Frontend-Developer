import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Pagination from '.';

const props = {
  pages: 5,
  page: 1,
  hasNextPage: true,
  hasPrevPage: false,
};
describe('Pagination', () => {
  it('should perform all pagination request', () => {
    const pageReq = jest.fn();
    render(<Pagination {...props} onPageRequest={pageReq} />);
    const wrapper = screen.getByTestId('pages_wrapper');
    const btns = wrapper.querySelectorAll('button');
    expect(btns.length).toBe(7);
    const firstBtn = btns[1];
    expect(firstBtn).toHaveAttribute(
      'class',
      'w-10 h-10 bg-accent-400 text-white'
    );
    expect(firstBtn).not.toHaveAttribute(
      'class',
      'bg-accent-400 text-white w-10 h-10'
    );
    fireEvent.click(btns[btns.length - 1]);
    expect(pageReq).toHaveBeenCalled();
  });
});
