import React, { Component } from "react";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Button from '@mui/material/Button';

//Since I don't have any destination for the selected file, just the implementation to select the file and show the description
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
 
class FileGet extends Component {
    state = {
        selectedFile: null,
    };
 
    onFileChange = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
        });
    };
 
    fileData = () => {
        if (this.state.selectedFile) {
            
        } else {
            return (
                <div>
                    <br />
                    <h4>
                        Drag & Drop Here Or Browse
                    </h4>
                </div>
            );
        }
    };

    infoData = () => {
        if (this.state.selectedFile) {
            return (
                <Box sx={{ width: '100%', marginTop: '15px' }}>
                    <Item>
                        <div>
                            <p>
                                File Name:{" "}
                                {this.state.selectedFile.name}
                            </p>
                        </div>
                    </Item>
                </Box>
            );
        } 
    };
 
    render() {
        return (
            <Box sx={{ width: '100%', marginLeft: '10px'}}>
                <Item>
                    <div>
                        <InsertDriveFileIcon />
                        {this.fileData()}
                        <div>
                            <input
                                type="file"
                                onChange={this.onFileChange}
                            />
                            <Button variant="contained" onClick={this.onFileUpload}>
                                Upload Manifest
                            </Button>
                        </div>
                    </div>
                </Item>
                {this.infoData()}
            </Box>
        );
    }
}
 
export default FileGet;