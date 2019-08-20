import React from 'react';
import { Route, Link } from 'react-router-dom'

// components
import Login from './components/Login'
import FriendsList from './components/FriendsList'

import './App.scss';

function App() {
  return (
    <div className="App">
      {/* Links */}
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/protected">Friends (Protected)</Link>
        </li>
      </ul>
      {/* Routes */}
      <Route path='/login' component={Login} />
    </div>
  );
}

export default App;
