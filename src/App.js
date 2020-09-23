import React, {useState} from "react"
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"

import HeaderC from "./components/HeaderC"
import FooterV from "./components/FooterV"

import HomeC from "./pages/Home/HomeC"
import SetupV from "./pages/Setup/SetupV"
import UnderConstructionV from "./pages/UnderConstruction/UnderConstructionV"
import LogInC from "./pages/LogIn/LogInC"
import LogOutCV from "./pages/LogOut/LogOutCV"

import useRoommate from "./hooks/useRoommate"

function App() {    

    let [isLoggedIn, setIsLoggedIn] = useState(false);
    let {roommate} = useRoommate();

    return (
      <Router>
          {isLoggedIn ?
            <>
              <HeaderC isLogged="isLoggedIn"/>
              <Switch>
                <Route path="/login">
                  <Redirect to="/"/>
                </Route>
                <Route exact path="/logout">
                  <LogOutCV setIsLoggedIn={setIsLoggedIn}/>
                </Route>

                <Route exact path="/about">
                  <UnderConstructionV/>
                </Route>
                <Route exact path="/contact">
                  <UnderConstructionV/>
                </Route>
                <Route exact path="/privacy">
                  <UnderConstructionV/>
                </Route>
                <Route exact path="/terms">
                  <UnderConstructionV/>
                </Route>
                <Route exact path="/join-home">
                  <UnderConstructionV/>
                </Route>
                <Route exact path="/new-home">
                  <UnderConstructionV/>
                </Route>

                <Route path="">
                  { roommate.homeId ? <HomeC/> : <SetupV/> }
                </Route>
              </Switch>
            </>
            :

            <Switch>
              <Route path="/login">
                <LogInC setIsLoggedIn={setIsLoggedIn}/>
              </Route>
              
              <Route exact path="/about">
                <UnderConstructionV/>
              </Route>
              <Route exact path="/contact">
                <UnderConstructionV/>
              </Route>
              <Route exact path="/privacy">
                <UnderConstructionV/>
              </Route>
              <Route exact path="/terms">
                <UnderConstructionV/>
              </Route>
              <Route exact path="/forgot-password">
                <UnderConstructionV/>
              </Route>
              <Route exact path="/alt-login">
                <UnderConstructionV/>
              </Route>

              <Route path="">
                <Redirect to="/login"/>
              </Route>
            </Switch>
          }

        <FooterV/>
      </Router>
    )
}
export default App