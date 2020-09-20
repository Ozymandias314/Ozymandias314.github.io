// TODO: Get it WORKING 

import React from "react";
import ReactDOM from "react-dom";
import Hotkeys from "react-hot-keys";
import NodeComponentReal from "./NodeComponentReal";
import "./NodeComponent";

class App extends React.Component {
  constructor() {
    super();
  }

  onKeyDownNote(keyName, e, handle) {
    return( <NodeComponentReal /> );
  }

  render() {
    return (
      <Hotkeys
        keyName="alt+l"
        onKeyDown={this.onKeyDownNote.bind(this)}
        filter={event => true}
      >
        <div>
        To add a new note, press alt + n, and to add a new link, press alt + l
        </div>
      </Hotkeys>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
