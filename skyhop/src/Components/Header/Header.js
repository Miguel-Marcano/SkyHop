import './Header.css';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

function Header() {
    return(
        <Box sx={{ flexGrow: 1, width: '20%', marginLeft: '39%' }}>
            <header className="style">
                <p>Document Upload</p>
            </header>
            <Divider variant="middle"  />
        </Box>
    );
}

export default Header;