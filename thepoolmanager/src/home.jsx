import React, { Component } from 'react';
import { firebaseApp } from './firebase';
import style from './style.css';



class Home extends React.Component {

signOut() {
 firebaseApp.auth().signOut();
 this.props.signOutChangedState();
 this.props.history.push('/');
}

 render() {
   return (
     <div>
       <div>
         <center><img className="imeg" src="../logo.jpg" style={{width:'50%',height:'40%'}}/></center>
         <br />
         <center><img src="../4.jpg" style={{width:'40%',height:'30%'}}/>
         <img src="../7.jpg" style={{width:'40%',height:'30%'}} /></center>
         <br />
         <center><img src="../2.jpg" style={{width:'35%',height:'30%'}} />
         <img src="../3.jpg" style={{width:'28%',height:'20%'}} /></center>
       </div>
     <button
       className='danger'
       onClick={() => this.signOut()}
       >
       Sign Out
     </button>

     </div>

   );
 }
}

export default Home;
