import React, {useState} from "react"
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Setup from "./pages/Setup"
import UnderConstruction from "./pages/UnderConstruction"
import LogIn from "./pages/LogIn"
import LogOut from "./pages/LogOut"
import useRoommate from "./hooks/useRoommate"

function App() {    

    let [isLoggedIn, setIsLoggedIn] = useState(false);
    let {roommate} = useRoommate();

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
                  { roommate.homeId ? <Home/> : <Setup/> }
                </Route>
              </Switch>
            </>
            :

            <Switch>
              <Route path="/login">
                { false ? <Setup></Setup> : <LogIn setIsLoggedIn={setIsLoggedIn}/>}
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