// Packages
import React from 'react'
import {signInWithGoogle} from '../../firebase/firebase.utils.js'

// Components
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

// Styles
import './sign-in.styles.css'

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  // Alternative Firebase Authentication  // User Auth
  /*
  signInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(googleProvider)
    .then((re) => {
      console.log(re)
    })

    .catch((err) => {
      console.log(err)
    })

  }
  */

  handleSubmit = event => {
      event.preventDefault()


      this.setState({email: '', password: ''})
  }

  handleChange = event => {
    const {value, name} = event.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='email' 
            type='email' 
            handleChange={this.handleChange} 
            value={this.state.email} 
            label="Email"
            required 
            />
          <FormInput 
            name='password' 
            type='password' 
            handleChange={this.handleChange} 
            value={this.state.password} 
            label="Password"
            required 
            />
          <div className='buttons'>
            <CustomButton type='submit' children='Sign In' />
            <CustomButton onClick={ signInWithGoogle } children='Sign In with Google' isGoogleSignIn />
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn