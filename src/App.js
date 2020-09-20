import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import ReactDOM from'react-dom';
import NodeComponentReal from './components/NodeComponentReal'


class App extends React.Component {

  constructor(){
    super();
    this.state = {numNodes: 0,
    elmts: [], 
    elmts2: []}
  }

  addNote() {
    this.setState({numNodes: this.state.numNodes + 1});
    var copy = this.state.elmts.slice()
    copy.push("1")
    this.setState({elmts: copy});
    
  }



  render(){
    
  return (
    <div id='main'>
      {this.state.numNodes}
   <Button variant='contained'
   onClick={() => this.addNote()}>
     Add Note
      </Button>
    <Button variant ='contained' onClick={() => this.addLink()}>
      Add Link 
    </Button>
      {this.state.elmts.map((value, index) => {
        return (<NodeComponentReal >
        </NodeComponentReal>);
      })}
      
      
      
    </div>
     
  
  );
  }
}

export default App;
