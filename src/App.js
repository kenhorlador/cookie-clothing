// Packages
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// Components
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

// Pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx'

// Styles
import './App.css';


class App extends React.Component {
  constructor() {
    super() 

    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state.currentUser)
        })
      }
      this.setState({currentUser: userAuth})
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth = null
  }

  render() {
  return (
    <div>
      <Header currentUser={ this.state.currentUser } />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />  
        <Route exact path='/sign-in' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}
}
export default App;
