import React from "react"
import useRoommate from "../hooks/useRoommate"
import {Redirect} from "react-router-dom"

function Header(props) {
    //pull in user
    let {setRoommate} = useRoommate();

    //clear roommate
    setRoommate({});

    //logout
    props.setIsLoggedIn(false);

    return (
        <Redirect to="/login"/>
    )
}

export default Header