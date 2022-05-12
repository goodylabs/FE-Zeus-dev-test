import * as React from "react";
import { Outlet, Link } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

import MenuIcon from '@mui/icons-material/Menu';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import HistoryIcon from '@mui/icons-material/History';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function MainLayout() {
    const [isVisible, setIsVisible] = React.useState(false);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => setIsVisible(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Weather App
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>

            <Drawer
                anchor={'left'}
                open={isVisible}
                onClose={() => setIsVisible(false)}
            >
                <List onClick={() => setIsVisible(false)}>

                    <ListItem button component={Link} to="/">
                        <ListItemIcon>
                            <ThermostatIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Current weather"} />
                    </ListItem>

                    <ListItem button component={Link} to="/historicalWeather">
                        <ListItemIcon>
                            <HistoryIcon />
                        </ListItemIcon>
                        <ListItemText primary="Historical weather" />
                    </ListItem>

                    <ListItem button component={Link} to="/locationSearch">
                        <ListItemIcon>
                            <LocationSearchingIcon />
                        </ListItemIcon>
                        <ListItemText primary="Location search" />
                    </ListItem>

                    <ListItem button component={Link} to="/locationSelection">
                        <ListItemIcon>
                            <LocationOnIcon />
                        </ListItemIcon>
                        <ListItemText primary="Location selection" />
                    </ListItem>

                </List>
            </Drawer>

            <Grid
                container
                justifyContent="center"
                sx={{ width: 1 }}
            >
                <Outlet />
            </Grid>
        </>
    );
}