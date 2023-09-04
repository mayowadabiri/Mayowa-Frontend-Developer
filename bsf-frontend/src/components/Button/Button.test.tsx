import { render, screen } from '@testing-library/react';
import Button from '.';
import '@testing-library/jest-dom/extend-expect';

describe('Button', () => {
  it('should render the button component', () => {
    render(<Button>Button</Button>);
    expect(screen.getByTestId('btn')).toBeTruthy();
  });
  it('renders the the variant based on the variant class passed', () => {
    render(<Button>Button</Button>);
  });
});
