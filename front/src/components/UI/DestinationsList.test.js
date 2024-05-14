import React from 'react';
import { render, screen } from '@testing-library/react';
import DestinationsList from './DestinationsList';
import { BrowserRouter as Router } from 'react-router-dom';

// Mock de DestinationsCard pour isoler les tests
jest.mock('./DestinationsCard', () => (props) => (
  <div data-testid="destination-card">{props.item.destinationName}</div>
));

describe('DestinationsList', () => {
  it('renders a list of destinations based on provided data', () => {
    const testData = [
      { id: 1, destinationName: 'Paris', country: 'France', price: '200', imgUrl: 'url1' },
      { id: 2, destinationName: 'Berlin', country: 'Germany', price: '250', imgUrl: 'url2' }
    ];

    render(
      <Router>
        <DestinationsList data={testData} />
      </Router>
    );

    const destinationCards = screen.getAllByTestId('destination-card');
    expect(destinationCards.length).toBe(2);
    expect(destinationCards[0]).toHaveTextContent('Paris');
    expect(destinationCards[1]).toHaveTextContent('Berlin');
  });
});
