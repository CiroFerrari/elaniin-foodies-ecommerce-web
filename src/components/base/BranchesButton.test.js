import { render, screen } from '@testing-library/react';
import BranchesButton from './BranchesButton';

const props = {
  name: 'Domicilio',
  image: 'imgURL',
  active: 'true',
  onClick: 'function'
};

const {
  name, image, active, onClick,
} = props;

it('Should not render BranchesButton component without props', () => {
  render(<BranchesButton />);
  expect(screen.queryByTestId('BranchesButton-test')).not.toBeInTheDocument();
});

it('Should render CtaButton component', () => {
  render(<BranchesButton name={name} image={image} active={active} onClick={onClick} />);
  const BranchesButtonElement = screen.getByTestId('BranchesButton-test');
  expect(BranchesButtonElement).toBeInTheDocument();
});

it('BranchesButton should render the right content title', () => {
  render(<BranchesButton name={name} image={image} active={active} onClick={onClick} />);
  const BranchesButtonElement = screen.getByText('Domicilio');
  expect(BranchesButtonElement).toBeInTheDocument();
});