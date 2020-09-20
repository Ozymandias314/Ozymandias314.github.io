import React from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import NodeComponent from './NodeComponent';
import Button from '@material-ui/core/Button';
import LinkIcon from '@material-ui/icons/Link';
import Draggable from 'react-draggable';
import { TrainRounded } from '@material-ui/icons';

export default class NodeComponentReal extends React.Component {
   constructor(){
      super();
      const [open, setOpen] = React.useState(false);
      const contentsOfNote = ""; 
      let isOpen = false;
      let num = 0;
      const [contentsOfNote, setContentsOfNote] = React.useState("Tell us more!");
      const [isOpen, setIsOpen] = React.useState(false);
    }

    showContents = () => {
      setIsOpen(!isOpen);
    }

    render(){
        return(
            <Draggable>
        <Button id = {0}>
        <Button variant = "outlined" color="primary">
        <LinkIcon></LinkIcon>
        </Button>
        <Button variant = "outlined" color="primary">
        <LinkIcon></LinkIcon>
        </Button>
        
            <NodeComponent></NodeComponent>
            <Collapse isOpen={true}>
              <Card>
              <CardBody>
                <input defaultValue = {"Hello World!"} class = "notes" />
              </CardBody>
              </Card>
        </Collapse>

            </Button>
        </Draggable>
        );
    }
}