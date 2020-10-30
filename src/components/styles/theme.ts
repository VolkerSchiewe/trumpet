import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';
import colors from "./colors";

const theme = responsiveFontSizes(createMuiTheme({
    typography: {
        fontFamily: "'Fira Sans Condensed', Arial, sans-serif"
    },
    palette: {
        primary: colors.blue,
        secondary: colors.yellow,
    },
    overrides: {
        MuiFormLabel: {
            root: {
                color: colors.blue.dark,
                "&$focused": {
                    "color": colors.blue.dark
                }
            },
        },
        MuiOutlinedInput: {
            root: {
                color: "black",
                backgroundColor: colors.blue.light,
                borderRadius: 0,
                border: 1,
            },
            notchedOutline: {
                color: colors.blue.dark,
                borderColor: colors.blue.dark,
            }
        },
        MuiChip: {
            outlinedPrimary: {
                backgroundColor: "white",
            }
        },
    },
    props: {
        MuiPaper: {
            square: true
        }
    }
}));

export default theme;