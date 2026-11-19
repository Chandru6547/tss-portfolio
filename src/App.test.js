import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the TechSign homepage', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /turn learning into career-ready skills/i })).toBeInTheDocument();
});

test('mobile menu toggle exposes its expanded state', () => {
  render(<App />);
  const openMenuButton = screen.getByRole('button', { name: 'Open menu' });

  fireEvent.click(openMenuButton);

  expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute('aria-expanded', 'true');
  expect(document.querySelector('#ts-mobile-menu a[href="#features"]')).toBeInTheDocument();
});
