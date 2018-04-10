import React, { Component } from 'react'

const Speech = (props) => {
    // https://codeshare.io/G87lDZ
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(props.text);
    // Find the voice you want
    const voices = synth.getVoices();
    const voice = voices
      .find(voice => voice.name === props.voice);
    // Use the selected voice
    console.log(utterThis)
    utterThis.voice = voice;
    // Change the pitch and pace
    utterThis.pitch = props.pitch;
    utterThis.rate = props.rate;
    // the cat speak 
    synth.speak(utterThis);
  
    return (
      <p>{props.voice} says: {props.text}</p>
    )
  }


  export default class VoiceSynthesizer extends React.Component {

    shouldComponentUpdate(nextProps){
        return nextProps.text !== this.props.text
    }

    render() {
      return (
        <React.Fragment>
        <Speech
          text={this.props.text}
          voice={this.props.voice}
          pitch={this.props.pitch}
          rate={this.props.rate}/>
        </React.Fragment>
        );
    }
  }
