import { render, screen } from '@testing-library/react';
import ContactInput from './ContactInput';

const props = {
  description: 'Nombre y Apellido',
  id: 'name',
  handle: 'handleName',
  placeholder: 'John Doe',
  value: ''
};

const {
  description, id, handle, placeholder, value,
} = props;

it('Should render CtaButton component', () => {
  render(<ContactInput description={description} id={id} handle={handle} placeholder={placeholder} value={value} />);
  const ContactInputElement = screen.getByTestId('ContactInput-test');
  expect(ContactInputElement).toBeInTheDocument();
});

it('ContactInput renders the right label text', () => {
  render(<ContactInput description={description} id={id} handle={handle} placeholder={placeholder} value={value} />);
  const ContactInputElement = screen.getByText('Nombre y Apellido');
  expect(ContactInputElement).toBeInTheDocument();
});

it('ContactInput should render Jonh Doe as placeholder', () => {
  render(<ContactInput description={description} id={id} handle={handle} placeholder={placeholder} value={value} />);
  const ContactInputElement = screen.getByPlaceholderText('John Doe');
  expect(ContactInputElement).toBeInTheDocument();
});

it('ContactInput should display an empty value', () => {
  render(<ContactInput description={description} id={id} handle={handle} placeholder={placeholder} value={value} />);
  const ContactInputElement = screen.getByDisplayValue('');
  expect(ContactInputElement).toBeInTheDocument();
});
