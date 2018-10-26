import React, {Component} from 'react';
import axios from 'axios';


class ExampleForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      activity: '',
      dateTime: '',
      inviteType: ''
    }
  }

  handleChange =(e) => {
    this.setState({name:e.target.value});
  }

  handleSubmit =(e) => {
    alert(this.state.name)
    //alert('A name was submitted: ' + this.state.name);
    e.preventDefault();
    const name = {
      name: this.state.name
    };
    axios.post('/eventform', { name })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error)
    })
    }


    postEventInfo =(e) =>{

    }


render(){
  return(
  <form onSubmit={this.handleSubmit}>
    <label>
      Name:
      <input className="nameof" type="text" value={this.state.name} onChange={this.handleChange} placeholder="Please enter name" />
      Activity:
      <input  className="activityof" type="text" value={this.state.activity} onChange={this.handleChange} placeholder="Please enter activity name" />
      DateTime:
      <input className="datetimeof" type="text" value={this.state.dateTime} onChange={this.handleChange} placeholder="Please enter date and time" />
      InviteType:
      <input className="inviteof" type="text" value={this.state.inviteType} onChange={this.handleChange} placeholder="Please enter invite type" />
    </label>
    <input type="submit" value="Submit" />
  </form>
  )
}


};
export default ExampleForm;
