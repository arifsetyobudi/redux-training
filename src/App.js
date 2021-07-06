import './App.css';

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import Counter from './components/Counter';
import Home from './components/Home';
import ItemCreate from './components/ItemCreate';
import ItemDetail from './components/ItemDetail';
import ItemList from './components/ItemList';
import Result from './components/Result';
import logo from './logo.svg';

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Counter></Counter> */}

        <Link to="/" >Home</Link>      <Link to="/items" >Item List</Link>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/items">
            <ItemList />
          </Route>
          <Route path="/items/create">
            <ItemCreate />
          </Route>
          <Route path="/items/:id">
            <ItemDetail />
          </Route>          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
