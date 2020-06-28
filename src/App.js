import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Home';
import Page1 from './Page1';
import { UserContext } from './UserConext';

function App() {
  const [user, setUser] = useState("foo");

  return (
    <Router>
      <div className="App">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/page1/">Page-1</Link>
        </li>
        <hr/>
        <UserContext.Provider value={{user, setUser}}>
          <Route path="/" exact component={Home}/>
          <Route path="/page1/" component={Page1}/>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
