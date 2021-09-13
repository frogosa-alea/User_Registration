import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import { UserList } from './UserList'
import { EditUser } from './EditUser'
import { RegisterUser } from './RegisterUser'

function App() {
  return (
    <div>
      <div id="menu_wrapper" class="blue">
      <div class="left"></div>
        <ul id="menu">
          <li><Link to="/" className="nav-link">Registered Users</Link></li>
          <li><Link to="/register" className="nav-link">Registration Form</Link></li>
        </ul>
      </div>

      <Switch>
        <Route exact path="/" component={UserList} />
        <Route exact path="/edit/:id" component={EditUser} />
        <Route exact path="/register" component={RegisterUser} />
      </Switch>
    </div>
  );
}

export default App;
