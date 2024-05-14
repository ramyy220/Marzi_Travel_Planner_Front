import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders footer with copyright text', () => {
  render(<Footer />);
  const copyrightElement = screen.getByText(/© Copyright \d{4} MTP./i);
  expect(copyrightElement).toBeInTheDocument();
});

test('renders footer with signup button', () => {
  render(<Footer />);
  const buttonElement = screen.getByText(/Créer votre compte/i);
  expect(buttonElement).toBeInTheDocument();
});
