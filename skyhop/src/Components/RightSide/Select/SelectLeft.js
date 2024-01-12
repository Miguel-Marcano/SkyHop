import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Select.css';

function SelectAutoWidthLeft() {
  const [name, setName] = React.useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  //MUI component to create the drop down menu. Some sample text was display here, some style change dude the specification. A better implemetation on the future could be create a main select component that could take multiple cases and don't have redundant code.
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: '99%' }}>
        <InputLabel id="demo-simple-select-autowidth-label-left">Select Import Name</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={name}
          onChange={handleChange}
          autoWidthS
          label="Name"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Example</MenuItem>
          <MenuItem value={21}>Example 1</MenuItem>
          <MenuItem value={22}>Example 2</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectAutoWidthLeft;