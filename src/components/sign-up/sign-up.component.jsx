// Components
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

// Packages 
import React from 'react'
import { auth, createUserProfileDocument} from '../../firebase/firebase.utils'

// Style
import './sign-up.styles.css'

class SignUp extends React.Component {
  constructor() {
    super()

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault()

    const {displayName, email, password, confirmPassword} = this.state
    
    if (password !== confirmPassword)  {
      alert("Passwords doesn't match. Try again")
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)

      await createUserProfileDocument(user, { displayName })
      
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })

    } catch (error) {
      console.error(error)
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target

    this.setState({ [name] : value })
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state

    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Sign up with your Email and Password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput 
            name='displayName'
            type='text'
            handleChange={this.handleChange}
            value={displayName}
            label="Display name"
            required
          />
          <FormInput 
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={email}
            label="Email"
            required
          />
          <FormInput 
            name='password'
            type='password'
            handleChange={this.handleChange}
            value={password}
            label="Password"
            required
          />
          <FormInput 
            name='confirmPassword'
            type='password'
            handleChange={this.handleChange}
            value={confirmPassword}
            label="Confirm password"
            required
          />
          <CustomButton 
            type="submit"
            children="Sign Up"
          />
        </form>
      </div>
    )
  }
}

export default SignUp