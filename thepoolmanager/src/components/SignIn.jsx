import React from 'react';
import { firebaseApp } from '../firebase'
import { Link } from 'react-router-dom';

class SignIn extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message:''
      }
    }
    }

  triggerSignIn() {
    const {email, password } = this.state;
    this.props.signIn(email, password)
    this.props.history.push('/home');
  }

  render(){
    return(
      <div className='form-inline' style={{margin: '5%'}}>
        <h2>Sign In</h2>
        <div className='from-group'>
          <input
            className='form-control'
              type='text'
              style={{marginRight: '5px'}}
              placeholder='email'
              onChange={event => this.setState({email: event.target.value})}
             />
           <input
             className='form-control'
             type='password'
             style={{marginRight: '5px'}}
             placeholder='password'
             onChange={event => this.setState({password: event.target.value})}
             />
           <button
             className='btn btn-primary'
             type='button'
             onClick={() => this.triggerSignIn()}
             >
             Sign In
           </button>
        </div>
        <div>{this.state.error.message}</div>
        <div><Link to={'/SignUp'}>Not a member? Sign up instead</Link></div>
      </div>
    )
  }
}

export default SignIn;
