import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import DestinationsCard from './DestinationsCard';

test('renders destinations card with correct data', () => {
  const item = {
    id: 1,
    imgUrl: 'test.jpg',
    destinationName: 'Test Destination',
    country: 'Test Country'
  };

  render(
    <Router>
      <DestinationsCard item={item} />
    </Router>
  );

  const imgElement = screen.getByAltText('destination');
  const linkElement = screen.getByText(`${item.destinationName}, ${item.country}`);

  expect(imgElement).toBeInTheDocument();
  expect(imgElement).toHaveAttribute('src', item.imgUrl);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement.closest('a')).toHaveAttribute('href', `/DestDetails/${item.id}`);
});