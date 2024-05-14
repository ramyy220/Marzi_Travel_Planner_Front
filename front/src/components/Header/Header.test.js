import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

test('renders header with nav items', () => {
    const navItems = [
        { display: 'HOME', path: 'Home' },
        { display: 'SERVICES', path: 'Services' },
        { display: 'MAP', path: 'Map' },
        { display: 'CONTACT', path: 'Contact' },
      ];
    

  render(
    <Router>
      <Header />
    </Router>
  );

  navItems.forEach(item => {
    const navItemElement = screen.getByText(new RegExp(item.display, 'i'));
    expect(navItemElement).toBeInTheDocument();
    expect(navItemElement).toHaveAttribute('href', `/${item.path}`);
  });
});