import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import AirIcon from '@mui/icons-material/Air';
import ExploreIcon from '@mui/icons-material/Explore';
import SpeedIcon from '@mui/icons-material/Speed';
import OpacityIcon from '@mui/icons-material/Opacity';

export default function CurrentWeatherCard(props) {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&appid=91f5ed88ff4adb51496e243844b9f75a&units=metric`)
            .then(res => setData(res.data))
    }, []);


    if (!data)
        return <h2>Loading...</h2>
    else
        return (
            <Card>
                <CardHeader
                    title={
                        <Typography variant="h5" component="div">
                            {data.name}
                        </Typography>
                    }
                    subheader={
                        <Typography color="text.secondary">
                            (lat: {data.coord.lat}, lon: {data.coord.lon})
            </Typography>
                    }
                />

                <CardContent sx={{ py: 0 }}>
                    <List sx={{ py: 0 }}>
                        <ListItem>
                            <ListItemIcon>
                                <ListItemAvatar>
                                    <Avatar alt="weather_icon" src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} variant="square" />
                                </ListItemAvatar>
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography variant="h5" component="div">
                                        {Math.round(data.main.temp) + '\u00b0C'}
                                    </Typography>}
                                secondary={new Date(data.dt * 1000).toISOString().substr(11, 8)}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <AirIcon />
                            </ListItemIcon>
                            <ListItemText primary={`Wind speed: ${data.wind.speed} km/h`} />
                        </ListItem>

                        <ListItem>
                            <ListItemIcon>
                                <ExploreIcon />
                            </ListItemIcon>
                            <ListItemText primary={`Wind direction: ${data.wind.deg}\u00b0`} />
                        </ListItem>

                        <ListItem>
                            <ListItemIcon>
                                <SpeedIcon />
                            </ListItemIcon>
                            <ListItemText primary={`Atmospheric pressure: ${data.main.pressure} hPa`} />
                        </ListItem>

                        <ListItem>
                            <ListItemIcon>
                                <OpacityIcon />
                            </ListItemIcon>
                            <ListItemText primary={`Humidity: ${data.main.humidity}%`} />
                        </ListItem>
                    </List>

                </CardContent>
            </Card>
        )
}