import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';

const theme = responsiveFontSizes(createMuiTheme({
    typography:{
        fontFamily: "'Fira Sans', Arial, sans-serif"
    },
}));

export default theme;