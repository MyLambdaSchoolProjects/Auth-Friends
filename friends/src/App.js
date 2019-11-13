import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import FriendsList from "./components/friendsList";
import Login from "./components/login";
import NewFriend from './components/newFriend';
import PrivateRoute from "./components/privateRoute";

function App() {
  return (
    <div className="App">
      <div style ={{width: '20%', margin: '0 auto'}}>
        <ul style={{ display: "flex", listStyle: "none" }}>
          <li>
            <Link to="/login" style={{ textDecoration: "none" }}>
              Login
            </Link>
          </li>
          <li style={{marginLeft: '1rem'}}>
            <Link to="/protected" style={{ textDecoration: "none" }}>
              Friends
            </Link>
          </li>
          <li style={{marginLeft: '1rem'}}>
            <Link to="/new" style={{ textDecoration: "none" }}>
              NewFriend
            </Link>
          </li>
        </ul>
      </div>

      <Switch>
        <PrivateRoute path="/protected">
          <FriendsList />
        </PrivateRoute>
        <PrivateRoute path='/new'>
          <NewFriend />
        </PrivateRoute>
        <Route to="login" component={Login} />
        <Route
          render={() => {
            return (
              <img
                src="https://devclass.com/wp-content/uploads/2018/10/lambda.jpeg"
                alt=""
              />
            );
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
