import React, { Component } from 'react';
import './App.css';
import Top from './components/Top';
import Main from './components/Main';
import NewPartyForm from './components/NewPartyForm';
import RenderFormBtn from './components/RenderFormBtn';
import Middle from './components/Middle';


class App extends Component {

  state = {
    renderForm: false
  }

  changeToForm = () => {
    this.setState({
      renderForm: !this.state.renderForm ? true : false
    })
  }

  formRender = () => {
    if(this.state.renderForm){
      return <div class="body">
        <div class="blur-view">
          <Top/><br/><br/><hr/>
          <NewPartyForm/>
          <RenderFormBtn classes="btn btn-width btn-outline-light z-depth-0 mt-4" changeToForm={this.changeToForm} btnTxt={this.buttonLabel}/>
        </div>
        <Middle/>
      </div>
    }
    return <div>
      <div class="body text-left">
        <div class="container">
          <Top/>
          <Main/>
          <RenderFormBtn classes="btn btn-width btn-outline-light z-depth-0 mt-5 ml-3" changeToForm={this.changeToForm} btnTxt={this.buttonLabel}/>
        </div>
      </div>
      <Middle/>
    </div>
  }

  buttonLabel = () => {
    return this.state.renderForm ? "Back" : "Reserve a Table";
  }



  render() {
    return (
      <div className="App mt-0 text-center">
        {this.formRender()}
      </div>
    );
  }
}

export default App;
