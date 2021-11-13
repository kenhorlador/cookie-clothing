// Styles
import './header.styles.css'

// Assets
import { ReactComponent as Logo } from '../../assets/crown.svg'

// React Router Dom
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className='options'>
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        <Link className="option" to="/sign-in">
          SIGN IN
        </Link>
      </div>
    </div>
  ) 
}

export default Header