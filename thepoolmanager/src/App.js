import React, { Component } from 'react';
import HeaderBar from "./components/header.jsx"
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./home.jsx"
import Events from "./components/events.jsx"
import About from "./components/about.jsx";
import Calendar from "./components/calendar.jsx"
import bookingSystem from "./components/bookingSystem.jsx"
import ContactUs from "./components/contacts.jsx"
import FooterPage from "./components/footer.jsx"
import { firebaseApp }  from './firebase';
import home from './home.jsx';
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import imageUploader from './components/imageUploader.jsx';
import exampleForm from './components/exampleForm.jsx'
import { Carousel } from 'react-responsive-carousel'
import CarouselMenu from "./components/Carousel.jsx"
import ButtonCounter from './components/likeCounter.jsx';


firebaseApp.auth().onAuthStateChanged(user => {
 if (user){
   console.log('user has signed in', user);
 }else{
   console.log('user has signed out');
 }
})


class App extends Component {
  constructor(){
    super();
    this.state = {
      isAuthed: false,
    }
    this.signIn = this.signIn.bind(this)
    this.signOutChangedState = this.signOutChangedState.bind(this)
  }

    signIn(email, password) {
      console.log('this.state', this.state);
      firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .catch(error => {
          this.setState({error})
        })
        this.setState({
          isAuthed: true
        })
    }
    signOutChangedState() {
      this.setState({
        isAuthed: false
      })
      }

render() {
  return (
    <BrowserRouter>
    <div>
      <HeaderBar isAuthed={this.state.isAuthed}/>
      <CarouselMenu />
      <Switch>
        <Route exact path ='/' render={(props) => <SignIn signIn={this.signIn} {...props} />} />
        <Route path ='/SignUp' component={SignUp} />
        <Route path="/home" render={(props) => <Home signOutChangedState={this.signOutChangedState} {...props} />} />
        <Route path="/about" component={About} />
        <Route path="/events" component={Events} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/bookAVisit" component={bookingSystem} />
        <Route path="/contacts" component={ContactUs} />
        <Route path="/uploader" component={imageUploader} />
        <Route path="/form" component={exampleForm} />
      </Switch>
      <ButtonCounter />
      <FooterPage />
    </div>
  </BrowserRouter>
);
}
}



export default App;
