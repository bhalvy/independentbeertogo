import React from 'react';
import './App.css';
import Table from './components/table'
import { Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '100vh',
        alignContent: 'space-between',
    },
    orangeLine: {
        padding: '1px',
        backgroundColor: '#fb8122',
    },
    noFlex: {
        flex: 'none',
    },
    flex: {
        flex: 'flex-grow',

    }
}));

function App() {
    const classes = useStyles();

    return (
    <div className={classes.mainContainer}>
        <header className={classes.noFlex}>
            <Typography variant="h1">
                Independent Beer To Go
            </Typography>
            <Typography variant="h2">
                STAY HOME, DRINK LOCAL, AND SUPPORT AN INDEPENDENT BREWERY.
            </Typography>
            <div className={classes.orangeLine}/>
        </header>
        <body className={classes.flex}>
            <Container maxWidth={'sm'}>
                <Table />
            </Container>
        </body>
        <footer className={classes.noFlex}>
            <Typography variant="h3">
                *This is a community project, visit Github to contribute.
            </Typography>
        </footer>
    </div>
  );
}

export default App;
