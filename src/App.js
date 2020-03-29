import React from 'react';
import './App.css';
import Table from './components/table'
import { Typography, Container, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        left: '0',
        position: 'fixed',
        top: '0',
    },
    header: {
        // height: '100%',
    },
    content: {
        height: '100%',
        overflowY: 'auto',
    },
    footer: {
        alignSelf: 'flex-end',
        width: '100%',
    },
    orangeLine: {
        padding: '1px',
        backgroundColor: '#fb8122',
    },
}));

function App() {
    const classes = useStyles();

    return (
    <div className={classes.mainContainer}>

        <header className={classes.header}>
            <Typography variant="h1">
                Independent Beer To Go
            </Typography>
            <Typography variant="h2">
                STAY HOME, DRINK LOCAL, AND SUPPORT AN INDEPENDENT BREWERY.
            </Typography>
            <div className={classes.orangeLine}/>
        </header>

        <body className={classes.content}>
            <Container maxWidth={'sm'}>
                <Table />
            </Container>
        </body>

        <footer className={classes.footer}>
            <Link href={'https://github.com/bhalvy/independentbeertogo'}>
                <Typography variant="h3">
                        *This is a community project, visit Github to contribute.
                </Typography>
            </Link>
        </footer>

    </div>
  );
}

export default App;
