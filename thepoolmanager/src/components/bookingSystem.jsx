import React from "react";
import {NavLink}  from 'react-router-dom';
import axios from "axios";
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
container: {
  display: 'flex',
  flexWrap: 'wrap',
},
textField: {
  marginLeft: theme.spacing.unit,
  marginRight: theme.spacing.unit,
  width: 200,
},
dense: {
  marginTop: 19,
},
menu: {
  width: 200,
},

});

class Booking extends React.Component{
constructor(props){
  super(props);
  this.state = {
    company:"",
    name:"",
    reason:"",
    hour:"",
    date:""
  }

  this.updateCompany = this.updateCompany.bind(this);
  this.updateName = this.updateName.bind(this);
  this.updateReason = this.updateReason.bind(this);
  this.updateHour = this.updateHour.bind(this);
  this.updateDate = this.updateDate.bind(this);
  this.postBooking = this.postBooking.bind(this);
  this.addNewBooking = this.addNewBooking.bind(this);
}

  updateCompany(event){
    this.setState({
      company: event.target.value
    })
  }
updateName(event){
  this.setState({
    name: event.target.value
  })
}
  updateReason(event){
    this.setState({
      reason: event.target.value
    })
  }
  updateHour(event){
    this.setState( {
      hour: event.target.value
    })
  }
  updateDate(event){
    this.setState({
      date: event.target.value

    })
  }

   postBooking(){
     const booking = {
       company: this.state.company,
       name: this.state.name,
       reason: this.state.reason,
       hour: this.state.hour,
       date: this.state.date
     }
     axios.post('/booking', {booking})
     .then(function response() {
       console.log(response);
       console.log(response.data);
     })
   }


addNewBooking(){
  this.postBooking(this.state.company, this.state.name, this.state.reason, this.state.hour, this.state.date);
  this.setState({
    company:"",
    name:"",
    reason:"",
    hour:"",
    date:""
  })
}




render(){
return(
<div>
  <img className="book1" src="../4.jpg" style={{width:'20%',height:'30%'}} />
  <img className="book2" src="../6.jpg" style={{width:'20%',height:'30%'}} />
  <div className="book">
    <h1>Book a visit</h1>
  <div>
      <TextField
        id="standard-name"
        label="company"
        value={this.state.company}
        onChange={(event) => this.updateCompany(event)}
        margin="normal"
      />
    <br/>
      <TextField
        id="standard-uncontrolled"
        label="name"
        value={this.state.name}
        onChange={(event) => this.updateName(event)}
        margin="normal"
      />
    <br/>
      <TextField
        id="standard-uncontrolled"
        label="reason"
        value={this.state.reason}
        onChange={(event) => this.updateReason(event)}
        margin="normal"
      />
    <br/>
      <TextField
        required
        id="standard-required"
        label="hour"
        value={this.state.hour}
        onChange={(event) => this.updateHour(event)}
        margin="normal"
      />
    <br/>
      <TextField
        error
        id="standard-error"
        label="date"
        value={this.state.date}
        onChange={(event) => this.updateDate(event)}
        margin="normal"
      />
    <br/>
     <button onClick={this.addNewBooking}>Submit</button>
     <br />
  </div>
</div>
</div>




  )
}
}


export default Booking;
