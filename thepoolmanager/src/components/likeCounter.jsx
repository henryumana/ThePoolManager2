import React from "react";
import $ from "jquery";

class ButtonCounter extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    counter: 0
  };
  this.handleClick = this.handleClick.bind(this);
  this.postCounter = this.postCounter.bind(this);
  this.two = this.two.bind(this);
}

  handleClick() {
    this.setState({
    counter: this.state.counter + 1
  });
  }
  postCounter(counter){
  $.ajax({  //axios//
    method: "POST",
     url: "/counter",
    contentType: 'application/json',
    data: JSON.stringify({
      counter:this.state.counter
    })
  }).done(() => {
    this.getPost();
  });
  console.log("counter value ", this.state.counter);
}
two(){
  this.handleClick();
  this.postCounter();
}
  render() {
    return (
      <div><center>
        <h3>Like Us</h3>
        <button onClick={this.two}>Like</button>
        <img className="ButtonCounter" src="https://i.imgur.com/sVUSuI6.jpg" style={{width:'50px',height:'30px'}}/>
        <p><strong> {this.state.counter} </strong></p>
      </center></div>
    );
  }
}

export default ButtonCounter;
