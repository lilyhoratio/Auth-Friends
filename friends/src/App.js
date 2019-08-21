import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom'

// components
import Login from './components/Login'
import FriendsList from './components/FriendComponents/FriendsList'
import PrivateRoute from './components/PrivateRoute'

import './App.scss';

function App() {

  const [friends, setFriends] = useState([])
  console.log("app props", friends)
  return (
    <div className="App">
      {/* Links */}
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/friends">Friends (Protected)</Link>
        </li>
      </ul>
      {/* Routes */}
      <Route path='/login' component={Login} />
      <PrivateRoute exact path="/friends" friends={friends} setFriends={setFriends} component={FriendsList} />
    </div>
  );
}

export default App;
