import * as React from "react";
import { AppBar, createStyles, IconButton, makeStyles, Theme, Toolbar, Typography, useTheme } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu"


const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      marginLeft: drawerWidth,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
  }),
);

interface NavBarProps {
  handleDrawerToggle: () => void,
}

export const NavBar = ({ handleDrawerToggle }: NavBarProps) => {

  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" className={ classes.appBar }>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={ handleDrawerToggle }
            className={ classes.menuButton }
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
};