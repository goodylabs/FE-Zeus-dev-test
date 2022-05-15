import React, { useState } from 'react';
import axios from 'axios';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ClosableSnackbar from '../components/ClosableSnackbar';

export default function LocationSearch() {
    const [cityName, setCityName] = useState('');
    const [error, setError] = useState('');
    const [open, setOpen] = useState(false);

    const saveCity = (data) => {
        const savedCities = JSON.parse(localStorage.getItem("saved-cities")) || [];
        const city = { name: data.name, lat: data.lat, lon: data.lon };
        if (savedCities.filter(savedCity => savedCity.name === city.name).length > 0) {
            setError('This city is already saved!');
            return;
        }
        savedCities.push(city);
        localStorage.setItem("saved-cities", JSON.stringify(savedCities));
    }

    const addCity = (e) => {
        e.preventDefault();
        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=91f5ed88ff4adb51496e243844b9f75a`)
            .then(res => {
                setError('');
                const data = res.data;
                if (!data.length) {
                    setError('City not found!');
                    return;
                }
                saveCity(data[0]);
                setOpen(true);
            })
    }

    return (
        <Grid container justifyContent="center">
            <Grid item md={4} sm={10} justifyContent="center" textAlign="center">
                <ClosableSnackbar error={error} open={open} setOpen={setOpen} />
                <form onSubmit={addCity}>
                    <TextField
                        required
                        fullWidth
                        label="Enter city name"
                        variant="outlined"
                        onChange={e => setCityName(e.target.value)}
                    />
                    <Button variant="contained" sx={{ mt: 2 }} type="submit">
                        ADD
                    </Button>
                </form>
            </Grid>
        </Grid>
    );
}