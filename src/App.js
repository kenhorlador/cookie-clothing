import { Switch, Route } from 'react-router-dom'

// Styles
import './App.css';

// Components
import HomePage from './pages/homepage/homepage.component';

const ShopPage = (props) => {
  console.log(props)
  return (
    <div>
      <h1>SHOP PAGE</h1>
    </div>
  )
}

const HatsPage = (props) => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
}

const HatsDetail = (props) => {
  console.log(props)
  return (
    <div>
      <h1>HATS DETAIL : {props.match.params.hatsId}</h1>
    </div>
  )
}


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />  
        <Route exact path='/shop/hats' component={HatsPage} />
        <Route path='/shop/hats/:hatsId' component={HatsDetail} />
      </Switch>
    </div>
  );
}

export default App;
