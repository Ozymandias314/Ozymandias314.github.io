import React from 'react';
//import { Collapse, CardBody, Card } from 'reactstrap';
import Collapse from '@material-ui/core/Collapse';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CreateIcon from '@material-ui/icons/Create';
import Draggable from 'react-draggable'; //I imported it right on top


export default function NodeComponent() {
    const [open, setOpen] = React.useState(false);
   
    const [titleOfNote, setTitleOfNote]= React.useState('Edit Your Title');
    const [noteContent, setNoteContent]= React.useState('Your Content');
    const [hiddenName, setHiddenName]=React.useState('');
    let num = 0;
    //const [contentsOfNote, setContentsOfNote] = React.useState('Tell us more!');
    const [isOpen, setIsOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleCardOpen = () => {
      setIsOpen(!isOpen);
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
    <>
      <div>
      
      <Button class = "note-title">
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {titleOfNote}          
        </Button>
        <Button variant="outlined" color="primary" onClick={handleCardOpen}>
          <CreateIcon></CreateIcon>
        </Button>
        </Button>
        
        <Card>
        <Collapse in={isOpen}>
              
              <CardContent>
                {noteContent}
              </CardContent>
              
        </Collapse>
        </Card>
      

      </div>
        <div class = "overlay">
        <div class = "modal">
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" autoFocus >
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
              defaultValue = {titleOfNote}
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
      </div>
      </>
    );
  }