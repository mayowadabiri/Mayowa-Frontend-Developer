import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Capsules from '.';

const capsule = {
  dragonType: 'Dragon 1.0',
  id: '5e9e2c5bf35918ed873b2664',
  last_update: 'Hanging in atrium at SpaceX HQ in Hawthorne ',
  launches: 1,
  reuse: 0,
  serial: 'C101',
  status: 'retired',
  water_landings: 1,
};
describe('Button', () => {
  it('should render the list of capsules', () => {
    const click = jest.fn();
    render(<Capsules {...capsule} onSelect={click} />);
    const pTags = screen.getByTestId('capsule').querySelectorAll('p');
    expect(pTags.length).toBe(6);
  });
  it('should call the view more button when it is clicked', () => {
    const click = jest.fn();
    render(<Capsules {...capsule} onSelect={click} />);
    const btn = screen.getByTestId('btn');
    fireEvent.click(btn);
    expect(click).toHaveBeenCalled();
  });
});
