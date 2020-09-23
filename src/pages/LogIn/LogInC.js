import React, { useState } from "react"
import useRoommate from "../../hooks/useRoommate"

import LogInV from "./LogInV";

function LogInC(props) {
    //destruct props
    let {setIsLoggedIn} = props;

    //control input
    let [username, setUsername] = useState(localStorage.rememberedUsername || "");
    let [isRememberMe, setIsRememberMe] = useState(!!localStorage.rememberedUsername);

    //pull in user
    let {setRoommate, getRoommateByUsername, createRoommate} = useRoommate();

    //LogIn Clicked
    function onLogIn(e){
        e.preventDefault();

        //check to see if a user by that name already exists if so copy their data over
        let temp_roommate = getRoommateByUsername(username.trim());
        
        //if not create a new user by that name
        if(!temp_roommate)
            temp_roommate = createRoommate(username.trim())

        //set current roommate
        setRoommate(temp_roommate);

        //remember username if isRememberMe
        if(isRememberMe)
            localStorage.rememberedUsername = temp_roommate.username;

        //flag as logged in
        setIsLoggedIn(true);
    }

    //remember me changed
    function onRememberMeChange(e){
        setIsRememberMe(e.target.checked);

        if(!e.target.checked)
            delete localStorage.rememberedUsername;
        else
            localStorage.rememberedUsername = username;
    }

    //username input change
    function onUsernameInputChange(e){
        e.persist()
        return setUsername(e.target.value);
    }

    return (
        <LogInV
            username={username}
            onUsernameInputChange={onUsernameInputChange}
            isRememberMe={isRememberMe}
            onRememberMeChange={onRememberMeChange}
            onLogIn={onLogIn}
        />
    )
}

export default LogInC