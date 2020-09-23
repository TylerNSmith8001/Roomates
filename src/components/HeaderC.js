import React from "react"
import {useHistory} from "react-router-dom"
import useRoommate from "../hooks/useRoommate"

import HeaderV from "./HeaderV"

function Header(props) {

    //pull in user
    let {roommate} = useRoommate();

    let history = useHistory()

    let hour = (new Date()).getHours();

    let greeting = hour < 5 ? "Good Evening" : hour < 12 ? "Good Morning" : hour <= 17 ? "Good Afternoon" : "Good Evening";

    return (
        <HeaderV
            roommate={roommate}
            history={history}
            greeting={greeting}
            {...props}
        />
    )
}

export default Header