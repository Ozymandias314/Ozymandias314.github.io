import React from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import NodeComponent from './NodeComponent';
import Button from '@material-ui/core/Button';
import LinkIcon from '@material-ui/icons/Link';
import Draggable from 'react-draggable';
import PanToolIcon from '@material-ui/icons/PanTool';
import { TrainRounded } from '@material-ui/icons';

export default class NodeComponentReal extends React.Component {
   constructor(){
      super();
    }

    

    render(){
        return(
            <Draggable>
        <Button id = {0}>
        <Button variant = "outlined" color="primary">
        <PanToolIcon />
        </Button>
        
            <NodeComponent></NodeComponent>
            

            </Button>
        </Draggable>
        );
    }
}