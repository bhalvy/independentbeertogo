import React from 'react';
import { Typography, Icon, TableBody, TableCell, Table, TableContainer } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import data from '../data/breweries_los_angeles'
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { red } from '@material-ui/core/colors';
import Map from '@material-ui/icons/Map';

const useStyles = makeStyles((theme) => ({
    // root: {
    //     width: '100%',
    // },
    orangeLine: {
        padding: '1px',
        backgroundColor: '#fb8122',
    },
    city: {
        fontSize: '.7rem',
    },
    detailContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    description: {
        padding: '10px',
    },
    backButton: {
        width: '100%',
    },
    breweryButton: {
        width: '100%',
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function SimpleTable() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [activeBrewery, setActiveBrewery] = React.useState('none');
    const [expanded, setExpanded] = React.useState(false);

    const handleClickOpen = (brewery) => {
        setActiveBrewery(brewery)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const BreweryDisplay = () => {
        return (
            <Box className={classes.root}>
                <Typography className={classes.title} variant={'h3'}>
                    {activeBrewery.name}
                </Typography>
                <div className={classes.orangeLine}/>
                <Typography className={classes.description} variant={'body1'}>
                    {activeBrewery.notes}
                </Typography>
                <Button className={classes.backButton} href={activeBrewery.orderUrl}>
                    <Icon className="fa fa-shopping-cart" color="textSecondary"/>
                    <Typography className={classes.breweryButton} variant={'button'}>
                        Order Online
                    </Typography>
                </Button>
                <Button className={classes.backButton} href={`https://instagram.com/${activeBrewery.instaHandle}`}>
                    <Icon className="fa fa-instagram" color="textSecondary"/>
                    <Typography className={classes.breweryButton} variant={'button'}>
                        News from Instagram
                    </Typography>
                </Button>
                <Button className={classes.backButton} href={`https://www.google.com/maps/search/?api=1&query=${encodeURI(activeBrewery.name)}`}>
                    <Icon className="fa fa-map-marker" color="textSecondary"/>
                    <Typography className={classes.breweryButton} variant={'button'}>
                        Directions to Brewery
                    </Typography>
                </Button>
                <Button className={classes.backButton} size="large" onClick={handleClose}>
                    Go Back
                </Button>
            </Box>
        )
    };

    return (
        <TableContainer>
            <Table className={classes.table} aria-label="simple table">
                <TableBody>
                    {data.map(row => (
                        <TableRow key={row.name} onClick={() => handleClickOpen(row)}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell className={classes.city}>
                                {row.city}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Dialog fullscreen maxWidth={'false'} open={open} onClose={handleClose} TransitionComponent={Transition}>
                <BreweryDisplay />
            </Dialog>
        </TableContainer>
    );
}