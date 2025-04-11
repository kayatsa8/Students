import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const SideNav = () => (
  <Drawer variant="permanent" anchor="left">
    <List>
      {['Students', 'Honor Condidates'].map((text) => (
        <ListItem button key={text}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </Drawer>
);
