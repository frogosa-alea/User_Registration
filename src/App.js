import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import { RegisteredUserList } from './RegisteredUserList'
import { CreateTodo } from './CreateTodo'
import { EditInfo } from './EditInfo'


function App() {
  return (
    <div>
      <nav className="navbar bg-light navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Registerd Users</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">Create Todo</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={RegisteredUserList} />
        <Route exact path="/edit/:id" component={EditInfo} />
        <Route exact path="/create" component={CreateTodo} />
      </Switch>
    </div>
  );
}

export default App;
