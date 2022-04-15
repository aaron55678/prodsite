import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
        main: '#2ecc71',
        },
        secondary: {
        main: '#7ee2a8',
        },
        error: {
        main: red.A400,
        },
        background: {
        default: '#fff',
        },
    text: {
        primary: '#121828',
        secondary: '#65748B',
        disabled: 'rgba(55, 65, 81, 0.48)'
    },
    marginAutoContainer: {
        width: 500,
        height: 80,
        display: 'flex',
        backgroundColor: 'gold',
      },
      marginAutoItem: {
        margin: 'auto'
      },
      alignItemsAndJustifyContent: {
        width: 500,
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
      },
  },
});

export default theme;