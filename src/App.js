import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import ReactDOM from'react-dom';
import NodeComponentReal from './components/NodeComponentReal'


class App extends React.Component {

  constructor(){
    super();
    this.state = {numNodes: 0}
  }

  addNote() {
    this.setState({numNodes: this.state.numNodes + 1});
    return (
    <NodeComponentReal></NodeComponentReal>
    );
  }

  render(){
    const elements = ['one', 'two', 'three'];
  return (
    <div id='main'>
      {this.state.numNodes}
   <Button variant='contained'
   onClick={() => this.addNote()}>
     Add Note
      </Button>
      {elements.map((value, index) => {
        <NodeComponentReal>
        </NodeComponentReal>
      })}
     
      
    </div>
     
  
  );
  }
}

export default App;
