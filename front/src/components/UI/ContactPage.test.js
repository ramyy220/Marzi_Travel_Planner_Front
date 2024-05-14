import { render, screen, fireEvent } from '@testing-library/react';
import ContactPage from './ContactPage';

test('renders contact form', () => {
  render(<ContactPage />);
  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);
  const submitButton = screen.getByRole('button', { name: /send/i });

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(messageInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('handles input change', () => {
  render(<ContactPage />);
  const nameInput = screen.getByLabelText(/name/i);

  fireEvent.change(nameInput, { target: { value: 'John Doe' } });

  expect(nameInput.value).toBe('John Doe');
});

