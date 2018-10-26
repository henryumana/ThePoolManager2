import React from "react"

import Modal from 'react-responsive-modal';


class Calendar extends React.Component {
constructor(props) {
super(props)
this.state = {
open: false
}
this.onOpenModal = this.onOpenModal.bind(this);
this.onCloseModal = this.onCloseModal.bind(this);
}

onOpenModal() {

this.setState({ open: true });
}

onCloseModal() {
this.setState({ open: false });
}

render() {
const { open } = this.state;

return (
<div>
<img className="imagenes1" src="./logo.jpg" style={{width:'40%',height:'40%'}}/>
<h3 className="calendario">  Today we have Thesis presentation done by the Hola Code Students!  </h3>

   <div >
  <iframe  title="calendar" src="https://calendar.google.com/calendar/embed?mode=AGENDA&amp;height=100&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=holacode.com_49297h4c9415iuq3nrnm62sk8g%40group.calendar.google.com&amp;color=%2342104A&amp;ctz=America%2FMexico_City"></iframe>
   </div>
 </div>

)}
}

export default Calendar;
