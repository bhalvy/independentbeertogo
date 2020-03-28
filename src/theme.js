import {createMuiTheme, responsiveFontSizes} from "@material-ui/core/styles";

let theme = createMuiTheme({
    palette: {
        primary: { main: '#1d2228' }, /* Off-Black */
        secondary: { main: '#e1e2e2' }, /* Off-White */
    },
    typography: {
        h1: {
            fontFamily: 'Zilla Slab',
            fontSize: '2.5rem',
            padding: '1.2rem .5rem',
            backgroundColor: '#1d2228',
            color: '#e1e2e2',
            textAlign: 'center',
        },
        h2: {
            fontFamily: 'Lato',
            fontSize: '.9rem',
            padding: '.8rem',
            backgroundColor: '#e1e2e2',
            color: '#1d2228',
            textAlign: 'center',
        },
        h3: {
            fontFamily: 'Zilla Slab',
            fontSize: '1rem',
            padding: '1.2rem .5rem',
            backgroundColor: '#1d2228',
            color: '#e1e2e2',
            textAlign: 'center',
        },
        p: {
            fontFamily: 'Lato',
        },
        caption: {
            fontFamily: 'Lato',
            backgroundColor: '#e1e2e2'
        },
        button: {
            fontFamily: 'Lato',
            fontSize: '.8rem',
            paddingLeft: '8px',
        },
        body1: {
            fontFamily: 'Lato',
            padding: '10px',
        }
    },
    overrides: {
        MuiTableCell: {
            root: {
                fontFamily: 'Lato',
                fontSize: '.9rem',
                textAlign: 'left',
            }
        },
        MuiIcon: {
            root: {
                fontSize: '1.9rem',

            }
        },
        MuiContainer: {
            root: {
                margin: '0px',
                padding: '0px',
                width: '100%',
            }
        }
    }
});

export default responsiveFontSizes(theme);