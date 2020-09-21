import React, {useState} from "react"
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom"

import Header from "./Header"
import Footer from "./Footer"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import LogIn from "./LogIn"

function App() {    
    //don't forget to use useRouteMatch if needed
    //"/wasdf/wasdf/:somevar"{this will go in route} and useParams(){this will go in detail component and will get :somevar}
    //figure out how to call a function to change current url/path via react-router-dom
    //useHistory might be what we need...... useHistory().push("/something/something") is how we do that....

    //maybe allow for a home page that doesn't force to login?

    let [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
      <Router>
          {isLoggedIn ?
            <>
              <Header isLogged="isLoggedIn"/>
              <Switch>
                <Route path="/login">
                <Redirect to="/"/>
                </Route>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
              </Switch>
              <Footer isLogged="isLoggedIn"/>
            </>
            :

            <Switch>
              <Route path="/login">
                <LogIn setIsLoggedIn={setIsLoggedIn}/>
              </Route>
              <Route path="">
                <Redirect to="/login"/>
              </Route>
            </Switch>
          }
      </Router>
    )
}
export default App