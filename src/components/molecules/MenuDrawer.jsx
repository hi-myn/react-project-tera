import React from "react";
import Drawer from "@mui/material/Drawer";
import { List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";

export default function MenuDrawer(props) {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.setOpen(false)}
    >
      <List>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/users">Users</Link>
        </ListItem>
        <ListItem>
          <Link to="/users/1/post">Criar Post</Link>{" "}
        </ListItem>
      </List>
    </Drawer>
  );
}
