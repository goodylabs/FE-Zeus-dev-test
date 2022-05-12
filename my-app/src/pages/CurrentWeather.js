import React from 'react';

import Grid from '@mui/material/Grid';

import CurrentWeatherCard from '../components/CurrentWeatherCard';

export default function CurrentWeather() {
        return (
            <Grid container justifyContent="center">
                <Grid item lg={3} md={6} sm={8}>
                    <CurrentWeatherCard city={'Lodz'} />
                </Grid>
            </Grid>
        );
}