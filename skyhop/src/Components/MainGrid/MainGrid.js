import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import RightSide from '../RightSide/RightSide';
import FileGet from '../LeftSide/FileGet/FileGet';
import LeftSide from '../LeftSide/LeftSide';

function MainGrid() {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <LeftSide />
                </Grid>
                <Grid item xs={6}>
                    <RightSide />
                </Grid>
            </Grid>
        </Box>
    );
}

export default MainGrid;