import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import ReactDOM from 'react-dom';
import NodeComponentReal from './components/NodeComponentReal'
//import LineTo from 'react-lineto';


class App extends React.Component {

  constructor(){
    super();
    this.state = {numNodes: 0,
    elmts: [], 
    elmts2: [],
    buttonVisibility: true,} // TODO: Change the value of buttonVisibility to false 
  }

  enterPressed(event) { // TODO: Fix the enterPressed function so that the main screen disappears and reveals the notes screen
    var code = event.keyCode || event.which;
    if(code === 13) { 
      this.setState = {buttonVisibility: true,};
    } 
  }

  addNote() {
    this.setState({numNodes: this.state.numNodes + 1});
    var copy = this.state.elmts.slice()
    copy.push("1")
    this.setState({elmts: copy});
  }

  addLine() {
    
  }
  
  render(){
    if(this.state.buttonVisibility){
    return (
      <div id='main'>
        {this.state.numNodes}
    <Button variant='contained' type = "button" class="btn btn-light btn-lg"
    onClick={() => this.addNote()}>
      Add Note
        </Button>
      <Button type = "button" class="btn btn-light btn-lg" variant ='contained' onClick={() => this.addLink()}>
        Add Link 
      </Button>
        {this.state.elmts.map((value, index) => {
          return (<NodeComponentReal >
          </NodeComponentReal>);
        })}
      </div>
    );}
    else { 
  return( <>  
      <div class = "row">

        <div class = "col-2"></div>

        <div class = "col-8">
        
          <h1 class = "display-1" text-align="center"> Clean notetaking.<br /> With everything you love. <br />
            Start Typing Below.
          </h1>

          <div> &nbsp;  </div>

          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Type in your notes here!" aria-label="Type in your notes here!" onKeyPress={this.enterPressed.bind(this)} aria-describedby="basic-addon2" /> 
            <div class="input-group-append"> </div>
          </div>
        </div>

        
        <div class = "col-2"></div>
      </div>
    </>);
    }
  }
}

export default App;
