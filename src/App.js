import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import { RegisteredUserList } from './RegisteredUserList'
import { CreateTodo } from './CreateTodo'
import { EditInfo } from './EditInfo'


function App() {
  return (
      
    <div>
      <div id="menu_wrapper" class="blue">
		  <div class="left"></div>
        <ul id="menu">
          <li><Link to="/" className="nav-link">Registered Users</Link></li>
          <li><Link to="/create" className="nav-link">Registration Form</Link></li>
        </ul>
		  </div>
      
      <Switch>
        <Route exact path="/" component={RegisteredUserList} />
        <Route exact path="/edit/:id" component={EditInfo} />
        <Route exact path="/create" component={CreateTodo} />
      </Switch>
    </div>
  );
}

export default App;
