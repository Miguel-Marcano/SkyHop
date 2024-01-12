import './Footer.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Footer() {
    return(
        <><header className="style">
            <p>Data in the import file is correct. Please press Continue to import.</p>
        </header>
        <Stack className="styleButton" direction="row" spacing={2}>
            <Button variant="contained" style={{width: '200px', height: '70px', minWidth: '30px', minHeight: '30px'}}>
                Continue Import
            </Button>
            <Button variant="outlined" color="error" style={{width: '200px', height: '70px', minWidth: '30px', minHeight: '30px'}}>
                Cancel
            </Button>
            
        </Stack></>
    );
}

export default Footer;