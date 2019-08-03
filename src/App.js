import React from 'react';
import './App.css';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const axios = require('axios')
const instance = axios.create({
  baseURL: 'https://www.eventbriteapi.com/v3'//,
})

class App extends React.Component {
  state = {
    activePage: 0,
    privatekey: "",
    attendees: "",
    eventsData: "",
    selectedEvent:""
  };
  handleEventSelection(event){
    this.setState({selectedEvent:event.target.value})
  }
  handleCancel(){
    this.setState({activePage :0, privatekey:"",   attendees: "",
      eventsData: "",
      selectedEvent:""})
  }
  submitSelection(){
    let data = this.state.selectedEvent;
    let auth = this.state.privatekey;
    try {
      let returnedval = instance.get(`/events/${data}/attendees/?token=${auth}`) 
      returnedval.then(response => {
        if (response) {
          this.setState({activePage: 2 , attendees:response.data.attendees })
        }
      })
      .catch(error => {
        console.log(error)
      })
    } catch (error) {
    console.error(error)
    }
  }

  handleChange(){
    if (this.state.activePage ===0){
      return  <FirstPage handlekeydown = {this.handlekeydown} handleTextChange ={this.handleTextChange} handleResult = {this.handleResult} />
    }
    else if(this.state.activePage ===1){
      return <SecondPage data={this.state.eventsData} eventid={this.state.selectedEvent} handleCancel={this.handleCancel.bind(this)} submitSelection={this.submitSelection.bind(this)} handleEventSelection={this.handleEventSelection.bind(this)} />
    }
    else if(this.state.activePage ===2){
      return <ThirdPage datafeed={this.state.attendees} handleBack={this.handleBack.bind(this)} />
    }
  }
  handlekeydown= (event)=>{
    if(event.key==='Enter'){
      this.handleResult()
    }
  }
  handleTextChange=(event)=>{
    this.setState({privatekey:event.target.value })
  }
  handleBack() {
    this.setState({activePage:1 , selectedEvent:""})
  }
  handleResult = () => {
    try {
        let returnedval = instance.get(`/users/me/events/?token=${this.state.privatekey}`) 
        returnedval.then(response => {
          if (response) {
            this.setState({activePage: 1 , eventsData:response.data.events })
          }
        })
        .catch(error => {
          alert("Invalid Private Key")
          console.log(error)
        })
    } catch (error) {
      console.error(error)
    }
  }
  
  render(){
    return(
      <div>
        <Stepper activeStep={this.state.activePage} alternativeLabel>
        {['Enter Eventbrite Private API Key', 'Choose Event', 'Event Attendees'].map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
        {this.handleChange()}
      </div>
    )
  }
}
export default App;
