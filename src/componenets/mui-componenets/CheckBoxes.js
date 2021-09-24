import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import './style.css'


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Checkboxes() {
  return (
    <div>
      <FormLabel className='skills' component="legend"><b>Skills:</b></FormLabel>
      <div className='label1'>
      <Checkbox  {...label} />
      
     <label>MERN</label>
     <Checkbox {...label} />

     <label>MEAN</label>
     <Checkbox {...label} />

     <label>MEVN</label>
     <Checkbox {...label} />

      <label>FARM</label>
     </div>
      


       

    </div>
  );
}
