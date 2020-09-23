import React from "react"
import useRoommate from "../../hooks/useRoommate"
import {Redirect} from "react-router-dom"

function LogOutCV(props) {
    //pull in user
    let {setRoommate} = useRoommate();

    //clear roommate
    setTimeout( () => setRoommate({}), 1);

    //logout
    props.setIsLoggedIn(false);

    return (
        <Redirect to="/Roommates/login"/>
    )
}

export default LogOutCV