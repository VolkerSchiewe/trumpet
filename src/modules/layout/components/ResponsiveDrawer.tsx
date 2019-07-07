import * as React from "react";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/Inbox";
import MailIcon from "@material-ui/icons/Mail";
import ListItemText from "@material-ui/core/ListItemText";
import { createStyles, makeStyles, Theme } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
  }),
);

interface ResponsiveDrawerProps {
  mobileOpen: boolean,
  handleDrawerToggle: () => void,
}

export const ResponsiveDrawer = ({ mobileOpen, handleDrawerToggle }: ResponsiveDrawerProps) => {
  const classes = useStyles();

  const drawerItems = (
    <div>
      <div className={ classes.toolbar }/>
      <Divider/>
      <List>
        { ['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={ text }>
            <ListItemIcon>{ index % 2 === 0 ? <InboxIcon/> : <MailIcon/> }</ListItemIcon>
            <ListItemText primary={ text }/>
          </ListItem>
        )) }
      </List>
      <Divider/>
      <List>
        { ['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={ text }>
            <ListItemIcon>{ index % 2 === 0 ? <InboxIcon/> : <MailIcon/> }</ListItemIcon>
            <ListItemText primary={ text }/>
          </ListItem>
        )) }
      </List>
    </div>
  );
  return (
    <React.Fragment>
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={ 'left' }
          open={ mobileOpen }
          onClose={ handleDrawerToggle }
          classes={ {
            paper: classes.drawerPaper,
          } }
          ModalProps={ {
            keepMounted: true, // Better open performance on mobile.
          } }
        >
          { drawerItems }
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={ {
            paper: classes.drawerPaper,
          } }
          variant="permanent"
          open
        >
          { drawerItems }
        </Drawer>
      </Hidden>
    </React.Fragment>
  );
};