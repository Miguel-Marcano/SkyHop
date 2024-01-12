import SelectAutoWidthLeft from "../RightSide/Select/SelectLeft";
import Divider from '@mui/material/Divider';
import FileGet from "./FileGet/FileGet";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './LeftSide.css';

function LeftSide() {
    return(
        <>
        <SelectAutoWidthLeft />
        <Divider style={{width: '50%', marginLeft: '10px', marginTop: '10px', marginBottom: '10px'}}/>
        <header className="styleLeft">
                <p>Select a manifest that you'd like to import</p>
        </header>
        <FileGet />
        <Divider style={{width: '50%', marginLeft: '10px', marginTop: '20px', marginBottom: '10px'}}/>
        <header className="styleLeft">
                <p>Elapse Data Checking:</p>
                <p className="subLocationLeft">No Elapsed Dates!</p>
        </header>
        <Divider style={{width: '50%', marginLeft: '10px', marginTop: '10px', marginBottom: '10px'}}/>
        <Box
      sx={{
        display: 'flex',
      }}
    >
        
        <FormGroup>
            <FormControlLabel control={<Switch defaultChecked />} label="Toggle ON" style={{marginLeft: '10px'}}/>
        </FormGroup>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={2}>
                    <AccessTimeIcon style={{marginTop: '15px', marginLeft: '20px'}}/>
                </Grid>
                <Grid item xs={6}>
                    <p>Select Tolerance Level</p>
                </Grid>
            </Grid>
    </Box>
        
        </>
    );
}

export default LeftSide;