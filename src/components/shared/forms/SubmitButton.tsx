import {Button, ButtonProps, withStyles} from "@material-ui/core";
import React from "react";
import colors from "../../styles/colors";

const SubmitButton: React.FC<ButtonProps> = (props) => (
    <Button {...props} type={"submit"}/>
)
const StyledSubmitButton = withStyles(() => ({
    root: {
        color: colors.green.dark,
        borderRadius: 0,
        backgroundColor: colors.green.light,
        '&:hover': {
            backgroundColor: colors.green.light,
        },
    },
}))(SubmitButton);
export default StyledSubmitButton