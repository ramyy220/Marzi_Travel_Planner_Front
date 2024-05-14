import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import DestDetails from './DestDetails';

// Données de test
const mockDestinations = [
    { id: '1', destinationName: 'Paris', imgUrl: 'url-to-image.jpg', description: 'Beautiful city', country: 'France', continent: 'Europe', price: 300, adventureType: 'City Tour' }
];

jest.mock('../assets/data/Destinations', () => mockDestinations);

describe('DestDetails', () => {
    it('renders the destination details correctly', () => {
        render(
            <MemoryRouter initialEntries={['/destinations/1']}>
                <Route path="/destinations/:id">
                    <DestDetails />
                </Route>
            </MemoryRouter>
        );

        expect(screen.getByText('Paris, France')).toBeInTheDocument();
        expect(screen.getByText('Beautiful city')).toBeInTheDocument();
        expect(screen.getByText('Country: France')).toBeInTheDocument();
        expect(screen.getByText('Continent: Europe')).toBeInTheDocument();
        expect(screen.getByText('Price: 300€')).toBeInTheDocument();
        expect(screen.getByText('Adventure Type: City Tour')).toBeInTheDocument();
        expect(screen.getByAltText('Paris')).toHaveAttribute('src', 'url-to-image.jpg');
    });

    it('displays loading when the destination id is invalid', () => {
        render(
            <MemoryRouter initialEntries={['/destinations/unknown']}>
                <Route path="/destinations/:id">
                    <DestDetails />
                </Route>
            </MemoryRouter>
        );

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
});
