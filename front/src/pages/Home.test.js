import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import { MemoryRouter } from 'react-router-dom';

describe('Home', () => {
  it('renders the home page with all its elements', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText('Vous rêvez de nouvelles aventures ?')).toBeInTheDocument();
    expect(screen.getByText("Commencer l'aventure")).toBeInTheDocument();
    expect(screen.getByText('Nos destinations à travers le monde')).toBeInTheDocument();
    });
});
