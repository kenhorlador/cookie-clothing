// Packages
import { Link } from 'react-router-dom'

// Library
import { auth } from '../../firebase/firebase.utils'

// Assets
import logo from '../../assets/logo.png'

// Styles
import './header.styles.css'

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src={ logo } alt="logo" className="logo" />
        <h3 className="logo-heading">Cookie Clothing</h3>
      </Link>
      <div className='options'>
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
          { 
            currentUser ? 
            <div className="option" onClick={() => {
              auth.signOut()
            }}
            >SIGN OUT
            </div> 
            : 
            <Link className="option" to="/sign-in">SIGN IN</Link> 
          }
      </div>
    </div>
  ) 
}

export default Header