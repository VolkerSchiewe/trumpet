import * as React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Home } from "../modules/home/components/Home";
import { ResponsiveDrawer } from "../modules/layout/components/ResponsiveDrawer";
import { NavBar } from "../modules/layout/components/NavBar";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

export const App = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  return (
    <div className={ classes.root }>
      <CssBaseline/>
      <NavBar handleDrawerToggle={ handleDrawerToggle }/>
      <nav className={ classes.drawer } aria-label="Mailbox folders">
        <ResponsiveDrawer mobileOpen={ mobileOpen } handleDrawerToggle={ handleDrawerToggle }/>
      </nav>
      <main className={ classes.content }>
        <div className={ classes.toolbar }/>
        <Home/>
      </main>
    </div>
  );
};
