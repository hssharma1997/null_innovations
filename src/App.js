import './App.css';
import Home from './Home'
import Signin from './Signin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Loggedin from './Loggedin'
import { useState, useEffect } from 'react';
import Profile from './Profile';

function App() {

  const [userinfo, setUserinfo] = useState([])
  const [user,setUser] = (JSON.stringify(localStorage.getItem('user')))
  const [postdata, setPostdata] = useState([])


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPostdata(data));

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUserinfo(data));

  }, [])


  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/" exact ><Home postdata={postdata} userinfo={userinfo} /></Route>
          <Route path="/signin" exact component={Signin} />
          <Route path="/profile/:userId"  ><Profile userinfo={userinfo} /></Route>
          {user ? <Route path="/loggedin" exact ><Loggedin postdata={postdata} userinfo={userinfo} /></Route> : ""}
        </Switch>
      </div>
    </Router>
  )
}

export default App;
