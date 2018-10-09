import React, { Component } from 'react';
import './App.css';
import Top from './components/Top';
import Main from './components/Main';
import NewPartyForm from './components/NewPartyForm';
import RenderFormBtn from './components/RenderFormBtn';


class App extends Component {

  state = {
    renderForm: false
  }

  render() {
    return (
      <div className="App body text-center">
        <Top/><br/><hr/>
        <Main/>
        <RenderFormBtn/>
      </div>
    );
  }
}

export default App;
