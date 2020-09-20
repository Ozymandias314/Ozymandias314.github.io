import React from 'react'
import NodeComponent from './NodeComponent'
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
export default class NodeComponentReal extends React.Component{
    constructor(){
        super();
        this.state = {index: ''};
    }

    render(){
        return(
            <Draggable>
        <Button>
        <Button variant = "outlined" color="primary">
        <LinkIcon></LinkIcon>
        </Button>
        <Button variant = "outlined" color="primary">
        <LinkIcon></LinkIcon>
        </Button>
        
            <NodeComponent></NodeComponent>
            </Button>
        </Draggable>
        );
    }
}