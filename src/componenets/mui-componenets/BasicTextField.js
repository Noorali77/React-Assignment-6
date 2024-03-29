import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields(props) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '97%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label={props.filled}  />
    </Box>
  );
}
