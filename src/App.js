import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={ Dashboard } />
        <Route path='/project/:id' component= {ProjectDetails} />
        <Route path='/signin' component={ SignIn }></Route>
      </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
