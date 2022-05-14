import React from 'react';
import Grid from '@mui/material/Grid';
import HistoricalWeatherChart from '../components/HistoricalWeatherChart';

export default function HistoricalWeather() {
    return (
        <Grid container justifyContent="center">
            <Grid item md={8} sm={10}>
                <HistoricalWeatherChart lat={51.759445} lon={19.457216} />
            </Grid>
        </Grid>
    );
}