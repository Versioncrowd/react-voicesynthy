import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VoiceSynthesizer from './components/VoiceSynthesizer';

class App extends Component {
  state = {
    voice: 'Fiona',
    text: 'Hello, I am Fiona. Please, type something!',
    textToAdd: '',
    pitch: 1.4,
    rate: 1,
  }

  addText = (e) => {
    const textToAdd = e.target.value;
    this.setState({textToAdd})
  }

  sayMyText = () => {
    const textToAdd = this.state.textToAdd;
    this.setState({
      text: textToAdd,
      textToAdd: ''
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <h1>Open in Chrome. Then turn your speakers on! Headphones are ok to.</h1>
          <input className="" onChange={this.addText} value={this.state.textToAdd}/>
          <button onClick={this.sayMyText}>Let me say it!</button>
        </div>
        <VoiceSynthesizer 
          text={this.state.text}
          voice={this.state.voice}
          pitch={this.state.pitch}
          rate={this.state.rate}
        />
      </React.Fragment>

    );
  }
}

export default App;
