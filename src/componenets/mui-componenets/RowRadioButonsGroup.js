import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './style.css'

export default function RowRadioButtonsGroup() {
  return (
    <FormControl className='fieldSet' component="fieldset">
      <FormLabel component="legend"><b>Gender:</b></FormLabel>
      <RadioGroup className='radioGroup'  row aria-label="gender" name="row-radio-buttons-group">
        <FormControlLabel value="Male" control={<Radio />} label="Male" />
        <FormControlLabel value="Female" control={<Radio />} label="Female" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
    
      
      </RadioGroup>
    </FormControl>
  );
}
