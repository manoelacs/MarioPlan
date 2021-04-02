import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar/>
      <Switch>
        <Route path='/' component={ Dashboard } ></Route>
      </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
