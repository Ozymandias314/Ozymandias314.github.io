import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function note() {
  return (
  <div class = "notes">
    <input type="text" class="form-control notes-textbox" aria-describedby="basic-addon2"> 
    </input>
    </div>
  );
}

ReactDOM.render(
  <note />,
  document.getElementById('root')
);