import React, {useState} from "react"
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./Home"
import UnderConstruction from "./pages/UnderConstruction"
import LogIn from "./pages/LogIn"
import LogOut from "./pages/LogOut"

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
                <Route exact path="/logout">
                  <LogOut setIsLoggedIn={setIsLoggedIn}/>
                </Route>

                <Route exact path="/about">
                  <UnderConstruction/>
                </Route>
                <Route exact path="/contact">
                  <UnderConstruction/>
                </Route>
                <Route exact path="/privacy">
                  <UnderConstruction/>
                </Route>
                <Route exact path="/terms">
                  <UnderConstruction/>
                </Route>

                <Route path="">
                  <Home/>
                </Route>
              </Switch>
            </>
            :

            <Switch>
              <Route path="/login">
                <LogIn setIsLoggedIn={setIsLoggedIn}/>
              </Route>
              
              <Route exact path="/about">
                <UnderConstruction/>
              </Route>
              <Route exact path="/contact">
                <UnderConstruction/>
              </Route>
              <Route exact path="/privacy">
                <UnderConstruction/>
              </Route>
              <Route exact path="/terms">
                <UnderConstruction/>
              </Route>

              <Route path="">
                <Redirect to="/login"/>
              </Route>
            </Switch>
          }

        <Footer/>
      </Router>
    )
}
export default App