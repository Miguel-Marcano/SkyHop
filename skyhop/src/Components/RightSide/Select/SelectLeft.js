import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SelectAutoWidthLeft() {
  const [client, setClient] = React.useState('');

  const handleChange = (event) => {
    setClient(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 350 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Select Import Name</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={client}
          onChange={handleChange}
          autoWidth
          label="Client"
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