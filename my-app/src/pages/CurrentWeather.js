import React from 'react';

import Grid from '@mui/material/Grid';

import CurrentWeatherCard from '../components/CurrentWeatherCard';

export default function CurrentWeather() {
        return (
            <Grid container justifyContent="center">
                <Grid item lg={3} md={6} sm={8}>
                    <CurrentWeatherCard lat={51.759445} lon={19.457216} />
                </Grid>
            </Grid>
        );
}