import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginForm from './Login';

describe('LoginForm', () => {

  // Test 1: Ensure the form and its fields render correctly on initial load.
  test('renders the login form with all fields', () => {
    render(<LoginForm />);
    
    // Check if the main heading is present
    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
    
    // Check for the email and password input fields
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    
    // Check for the submit button
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

});
