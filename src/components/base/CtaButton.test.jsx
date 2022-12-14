import { render, screen } from '@testing-library/react';
import CtaButton from './CtaButton';

const props = {
  name: 'Encuentranos',
  navigation: 'branchesContainer'
}

it('Should not render CtaButton component without props', () => {
  render(<CtaButton />);
  expect(screen.queryByTestId('CtaButton-test')).not.toBeInTheDocument();
});

it('Should render CtaButton component', () => {
  render(<CtaButton name={props.name} navigation={props.navigation} />);
  const CtaButtonElement = screen.getByTestId('CtaButton-test');
  expect(CtaButtonElement).toBeInTheDocument();
});

it('CtaButton component should render the right content', () => {
  render(<CtaButton name={props.name} navigation={props.navigation} />);
  const CtaButtonElement = screen.getByText('Encuentranos');
  expect(CtaButtonElement).toBeInTheDocument();
});