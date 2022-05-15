import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import CurrentWeatherCard from '../components/CurrentWeatherCard';
import HistoricalWeatherChart from '../components/HistoricalWeatherChart';

export default function LocationSelection() {
    const [savedCities, setSavedCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');

    useEffect(() => setSavedCities(JSON.parse(localStorage.getItem("saved-cities")) || []), []);

    const handleChange = (e) => setSelectedCity(e.target.value);

    return (
        <Grid container justifyContent="center">
            <Grid container item md={8} sm={10} justifyContent="center" alignItems="center" >
                <FormControl 
                    fullWidth
                    sx={{ mb: 1 }}
                >
                    <InputLabel>City</InputLabel>
                    <Select
                        value={selectedCity}
                        label="City"
                        onChange={handleChange}
                    >
                        {savedCities.map((city) => {
                            return <MenuItem value={city}>{city.name}</MenuItem>
                        })}
                    </Select>
                </FormControl>

                {selectedCity &&
                    <>
                        <Grid item lg={4} sm={12}>
                            <CurrentWeatherCard lat={selectedCity.lat} lon={selectedCity.lon} />
                        </Grid>
                        <Grid item lg={8} sm={12} minHeight={300}>
                            <HistoricalWeatherChart lat={selectedCity.lat} lon={selectedCity.lon} />
                        </Grid>
                    </>
                }
            </Grid>
        </Grid>
    );
}