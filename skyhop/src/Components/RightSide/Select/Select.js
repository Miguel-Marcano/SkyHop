import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function SelectAutoWidth() {
  const [client, setClient] = React.useState('');

  const handleChange = (event) => {
    setClient(event.target.value);
  };

  //MUI component to create the drop down menu. Some sample text was display here
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Select Client</InputLabel>
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
      <AccessTimeIcon style={{marginLeft: '1%', marginTop: '10%'}}/>
    </div>
  );
}

export default SelectAutoWidth;