import React from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import NodeComponent from './NodeComponent';
import Button from '@material-ui/core/Button';
import LinkIcon from '@material-ui/icons/Link';
import Draggable from 'react-draggable';
import PanToolIcon from '@material-ui/icons/PanTool';
import { ContactsOutlined, TrainRounded } from '@material-ui/icons';

export default class NodeComponentReal extends React.Component {
   constructor(){
      super();
    }

    handleCheck(e) {
        console.log(e.target());
    }
    

    render(){
        return(
            <Draggable>
        <Button>
        <Button variant = "outlined" color="primary">
        <PanToolIcon />
        </Button>
        
            <NodeComponent></NodeComponent>
            

            </Button>
        </Draggable>
        );
    }
}