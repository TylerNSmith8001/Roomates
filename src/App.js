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
                <Route path="/Roommates/login">
                  <Redirect to="/Roommates"/>
                </Route>
                <Route exact path="/Roommates/logout">
                  <LogOutCV setIsLoggedIn={setIsLoggedIn}/>
                </Route>

                <Route exact path="/Roommates/about">
                  <UnderConstructionV/>
                </Route>
                <Route exact path="/Roommates/contact">
                  <UnderConstructionV/>
                </Route>
                <Route exact path="/Roommates/privacy">
                  <UnderConstructionV/>
                </Route>
                <Route exact path="/Roommates/terms">
                  <UnderConstructionV/>
                </Route>
                <Route exact path="/Roommates/join-home">
                  <UnderConstructionV/>
                </Route>
                <Route exact path="/Roommates/new-home">
                  <UnderConstructionV/>
                </Route>

                <Route path="">
                  { roommate.homeId ? <HomeC/> : <SetupV/> }
                </Route>
              </Switch>
            </>
            :

            <Switch>
              <Route path="/Roommates/login">
                <LogInC setIsLoggedIn={setIsLoggedIn}/>
              </Route>
              
              <Route exact path="/Roommates/about">
                <UnderConstructionV/>
              </Route>
              <Route exact path="/Roommates/contact">
                <UnderConstructionV/>
              </Route>
              <Route exact path="/Roommates/privacy">
                <UnderConstructionV/>
              </Route>
              <Route exact path="/Roommates/terms">
                <UnderConstructionV/>
              </Route>
              <Route exact path="/Roommates/forgot-password">
                <UnderConstructionV/>
              </Route>
              <Route exact path="/Roommates/alt-login">
                <UnderConstructionV/>
              </Route>

              <Route path="">
                <Redirect to="/Roommates/login"/>
              </Route>
            </Switch>
          }

        <FooterV/>
      </Router>
    )
}
export default App