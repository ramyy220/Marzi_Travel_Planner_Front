import { render, screen } from '@testing-library/react';
import Map from './Map';

jest.mock('mapbox-gl', () => ({
  Map: jest.fn(() => ({
    on: jest.fn(),
    remove: jest.fn()
  })),
  Popup: jest.fn(() => ({
    setLngLat: jest.fn(),
    setHTML: jest.fn(),
    addTo: jest.fn()
  }))
}));

test('renders map container', () => {
  render(<Map />);
  const mapContainer = screen.getByTestId('map-container');
  expect(mapContainer).toBeInTheDocument();
});