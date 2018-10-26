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

class BookingEvent extends React.Component{
 constructor(props){
   super(props);
   this.state = {
     name:"",
     activity:"",
     dateTime:"",
     inviteType:"",
     contactInfo:""
   }

   this.updateName = this.updateName.bind(this);
   this.updateActivity = this.updateActivity.bind(this);
   this.updateDateTime = this.updateDateTime.bind(this);
   this.updateInviteType = this.updateInviteType.bind(this);
   this.updateContactInfo = this.updateContactInfo.bind(this);
   this.postEvent = this.postEvent.bind(this);
   this.addNewEvent = this.addNewEvent.bind(this)
 }

   updateName(event){
     this.setState({
       name: event.target.value
     })
   }
 updateActivity(event){
   this.setState({
     activity: event.target.value
   })
 }
   updateDateTime(event){
     this.setState({
       dateTime: event.target.value
     })
   }
   updateInviteType(event){
     this.setState( {
       inviteType: event.target.value
     })
   }
   updateContactInfo(event){
     this.setState({
       contactInfo: event.target.value

     })
   }

    postEvent(){
      const event = {
        name: this.state.name,
        activity: this.state.activity,
        dateTime: this.state.dateTime,
        inviteType: this.state.inviteType,
        contactInfo: this.state.contactInfo
      }
      axios.post('/eventform', {event})
      .then(function response() {
        console.log(response.data);
        (response.data);
      })
    }


 addNewEvent(){
   this.postEvent(this.state.name, this.state.activity, this.state.DateTime, this.state.inviteType, this.state.contactInfo);
   this.setState({
     name:"",
     activity:"",
     dateTime:"",
     inviteType:"",
     contactInfo:""
   })
 }




render(){
 return(
   <div className="EVN">
     <h1>Add  Event</h1>
   <div>
       <TextField
         id="standard-name"
         label="name"
         value={this.state.name}
         onChange={(event) => this.updateName(event)}
         margin="normal"
       />
     <br/>
       <TextField
         id="standard-uncontrolled"
         label="activity"
         value={this.state.activity}
         onChange={(event) => this.updateActivity(event)}
         margin="normal"
       />
     <br/>
       <TextField
         id="standard-uncontrolled"
         label="DateTime"
         value={this.state.DateTime}
         onChange={(event) => this.updateDateTime(event)}
         margin="normal"
       />
     <br/>
       <TextField
         required
         id="standard-required"
         label="inviteType"
         value={this.state.inviteType}
         onChange={(event) => this.updateInviteType(event)}
         margin="normal"
       />
     <br/>
       <TextField
         error
         id="standard-error"
         label="contactInfo"
         value={this.state.contactInfo}
         onChange={(event) => this.updateContactInfo(event)}
         margin="normal"
       />
     <br/>

      <button onClick={this.addNewEvent}>Submit</button>
      <br />
   </div>

   </div>



   )
 }
}


export default BookingEvent;
