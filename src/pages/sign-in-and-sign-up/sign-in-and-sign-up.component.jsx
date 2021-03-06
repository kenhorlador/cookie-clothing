// Components
import '../../components/sign-in/sign-in.component'
import '../../components/sign-up/sign-up.component'

// Styles
import SignIn from '../../components/sign-in/sign-in.component'
import './sign-in-and-sign-up.styles.css'
import SignUp from '../../components/sign-up/sign-up.component'

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInAndSignUp