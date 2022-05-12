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

export default function CurrentWeatherCard(props) {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(`http://api.weatherstack.com/current?access_key=5a3c133d73caaa7d24068be5c453aedb&query=${props.city}`)
            .then(res => setData(res.data))
    });


    if (!data)
        return <h2>Loading...</h2>
    else
        return (
            <Card>
                <CardHeader
                    title={
                        <Typography variant="h5" component="div">
                            {data.request.query}
                        </Typography>
                    }
                    subheader={
                        <Typography color="text.secondary">
                            (lat: {data.location.lat}, lon: {data.location.lon})
            </Typography>
                    }
                />

                <CardContent sx={{ py: 0 }}>
                    <List sx={{ py: 0 }}>
                        <ListItem>
                            <ListItemIcon>
                                <ListItemAvatar>
                                    <Avatar alt="weather_icon" src={`${data.current.weather_icons[0]}`} />
                                </ListItemAvatar>
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography variant="h5" component="div">
                                        {data.current.temperature + '\u00b0C'}
                                    </Typography>}
                                secondary={data.location.localtime}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={`Wind speed: ${data.current.wind_speed} km/h`} />
                        </ListItem>

                        <ListItem>
                            <ListItemText primary={"Wind direction: " + data.current.wind_dir} />
                        </ListItem>

                        <ListItem>
                            <ListItemText primary={"Atmospheric pressure: " + data.current.pressure + " MB"} />
                        </ListItem>

                        <ListItem>
                            <ListItemText primary={"Humidity: " + data.current.humidity + "%"} />
                        </ListItem>
                    </List>

                </CardContent>
            </Card>
        )
}