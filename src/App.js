import { Switch, Route } from 'react-router-dom'

// Styles
import './App.css';

// Components
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

// Pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx'


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />  
        <Route exact path='/sign-in' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
