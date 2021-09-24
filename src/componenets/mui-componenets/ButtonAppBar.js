import './style.css'
import { Link } from 'react-router-dom';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function ButtonAppBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link class='signup-link' to={props.page1}>
            {props.title}
            </Link>
          </Typography>
         <Link className='signup-link' to={props.page2}> <Button color="inherit">  {props.sideTitle}  </Button> </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
