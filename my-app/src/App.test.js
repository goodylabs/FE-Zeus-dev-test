import { render, screen, fireEvent } from '@testing-library/react';
import CurrentWeatherCard from './components/CurrentWeatherCard';
import LocationSearch from './pages/LocationSearch';

test('passing incorrect props to CurrentWeatherCard', async () => {
    render(<CurrentWeatherCard lat={51.759445} lon={'b'} />);
    expect(await screen.findByText('Error'));
});

test('trying to add the same city twice', async () => {
    render(<LocationSearch />);
    fireEvent.change(screen.getByLabelText(/enter city name/i), { target: { value: 'Warszawa' } });
    fireEvent.click(screen.getByText(/add/i));
    fireEvent.click(screen.getByText(/add/i));
    expect(await screen.findByText('This city is already saved!'));
});

test('trying to add a city that does not exist', async () => {
    render(<LocationSearch />);
    fireEvent.change(screen.getByLabelText(/enter city name/i), { target: { value: '-' } });
    fireEvent.click(screen.getByText(/add/i));
    expect(await screen.findByText('City not found!'));
});
