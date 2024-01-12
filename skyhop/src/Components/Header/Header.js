import './Header.css';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

function Header() {
    return(
        <>
        {/* Close Icon from MUI  */}
        <DisabledByDefaultIcon style={{position: 'absolute', marginLeft: '4%'}}/>
        {/* Box to place the title page and get a "fixed" length for the divider */}
        <Box sx={{ flexGrow: 1, width: '20%', marginLeft: '39%', marginBottom: '5px'}}>
            <p className="styleHeader">Document Upload</p>
            <Divider variant="middle" style={{ marginBottom: '15px' }} />
        </Box>
        </>
    );
}

export default Header;