import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ContainedButtons(props) {
  return (
    <Stack direction="row" justifyContent='center' mb={1} mt={1}>
      <Button variant="contained">{props.btn}</Button>
      </Stack>
  );
}
