import React from "react";
import $ from "jquery";
import { Link,NavLink } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import Coverflow from 'react-coverflow';
const fn = function(){

};

class CarouselMenu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      active: 0
    };
  }

  render() {
    return (
      //set up for stylesheet
     <div className="slider">
       <Coverflow

         width={100}
         height={450}
         displayQuantityOfSide={2}
         navigation={true}
         enableHeading={false}
         active={this.state.active}
       >
         <div
           onClick={() => fn()}
           onKeyDown={() => fn()}
           role="menuitem"
           tabIndex="0"
         >
         </div>

      <div>

        <h3><center><Link to="/home"><img src='https://i.imgur.com/hY129Ug.jpg' alt='Home' />HOME</Link></center></h3>
      </div>
      <div>
         <h3><center><Link to="/events"><img src='https://i.imgur.com/CDeIlFC.jpg' alt='Events' />EVENTS</Link></center></h3>
      </div>
      <div>
         <h3><center><Link to="/calendar"><img src='https://i.imgur.com/1WmWdRd.jpg' alt='Calendar' />CALENDAR</Link></center></h3>
      </div>
      <div>
         <h3><center><Link to="/bookAVisit"><img src='https://i.imgur.com/0B3JSZG.jpg' alt='Book a Visit' />BOOK A VISIT</Link></center></h3>
      </div>
      <div>
         <h3><center><Link to="/contacts"><img src='https://i.imgur.com/aKkXm4p.jpg' alt='Contact' />CONTACT US</Link></center></h3>
      </div>
      <div>
         <h3><center><Link to="/uploader"><img src='https://i.imgur.com/FZBQmez.jpg' alt='ImageUploader' />Complaints</Link></center></h3>
      </div>
    </Coverflow>



    </div>

    );
  }

  _handleClick() {
    var num = Math.floor((Math.random() * 10) + 1);
    this.setState({
      active: num
    });
  }
};
export default CarouselMenu;
