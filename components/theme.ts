import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';

const theme = responsiveFontSizes(createMuiTheme({
    typography:{
        fontFamily: "'Fira Sans', Arial, sans-serif"
    },
    palette:{
        blue: "#0097dc",
        yellow: "#f19938",
        green: "#00c835",
        magenta: "#f00079",
    }
}));

export default theme;