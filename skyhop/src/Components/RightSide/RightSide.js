import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Divider from '@mui/material/Divider';
import SelectAutoWidth from './Select/Select';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './RightSide.css';

function RightSide() {
    return(
        <>
        <FormControl>
            <FormLabel className="styleRight" id="demo-row-radio-buttons-group-label">Split schedule using social distancing?</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl>
        <Divider />
        <header className="styleRight">
                <p>Location Checking:</p>
                <p className="subLocation">All Available!</p>
        </header>
        <Divider />
        <FormControl>
            <FormLabel className="styleRight" id="demo-row-radio-buttons-group-label">Client:</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <FormControlLabel value="Single" control={<Radio />} label="Single" />
                <FormControlLabel value="Multiple" control={<Radio />} label="Multiple" />
            </RadioGroup>
        </FormControl>
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <>Testing Center 1</>
                </Grid>
                <Grid item xs={6}>
                    <SelectAutoWidth />
                </Grid>
                <Grid item xs={6}>
                <>Testing Center 2</>
                </Grid>
                <Grid item xs={6}>
                    <SelectAutoWidth />
                </Grid>
                <Grid item xs={6}>
                    <>Testing Center 3</>
                </Grid>
                <Grid item xs={6}>
                    <SelectAutoWidth />
                </Grid>
                <Grid item xs={6}>
                <>Testing Center 4</>
                </Grid>
                <Grid item xs={6}>
                    <SelectAutoWidth />
                </Grid>
            </Grid>
        </Box>
        </>
    );
}

export default RightSide;