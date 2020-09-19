import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CreateIcon from '@material-ui/icons/Create';
import LinkIcon from '@material-ui/icons/Link';

import Draggable from 'react-draggable';

export default function NodeComponent() {
    const [open, setOpen] = React.useState(false);


    const [titleOfNote, setTitleOfNote]= React.useState('Your Title');

    const [hiddenName, setHiddenName]=React.useState('');
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleCloseSubmit = () =>{
        setOpen(false);
        setTitleOfNote(hiddenName);
    }

    const getData=(e)=>{
      setHiddenName(e.target.value);
    }
  
    return (
      <div>
        <Draggable>
        <Button>
        <Button variant = "outlined" color="primary">
        <LinkIcon></LinkIcon>
        </Button>
        <Button variant="outlined" color="primary" >
        {titleOfNote}
          
        </Button>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          
        <CreateIcon></CreateIcon>
          

        </Button>
        </Button>
        </Draggable>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Title:</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please type the title of your note here
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              type="String"
              fullWidth
              onChange = {getData}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleCloseSubmit} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
        
      </div>
    );
  }