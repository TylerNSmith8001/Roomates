import React, { useState, useEffect, useRef } from "react"
import {Card, Button, Form} from "react-bootstrap"
import useRoommate from "../hooks/useRoommate"
import LogInFrame from "../components/LogInFrame"

function LogIn(props) {
    //destructor props
    let {setIsLoggedIn} = props;

    //control input
    let [username, setUsername] = useState(localStorage.rememberedUsername || "");
    let [isRememberMe, setIsRememberMe] = useState(!!localStorage.rememberedUsername);

    //set focus on load to username field
    let usernameInputRef = useRef(null);
    useEffect(() => usernameInputRef.current.focus(),[]);

    //pull in user
    let {setRoommate, findRoomateByUsername, createRoomate} = useRoommate();

    //LogIn Clicked
    function onLogIn(e){
        e.preventDefault();

        //check to see if a user by that name already exists if so copy their data over
        let temp_roommate = findRoomateByUsername(username.trim());
        
        //if not create a new user by that name
        if(!temp_roommate)
            temp_roommate = createRoomate(username.trim())

        //set current roomate
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

    return (
            <LogInFrame>
                <Card.Body>
                    <Card.Title>
                        LogIn
                        <br/>
                        <small className="text-secondary pl-2">(mock up - just provide username and "login")</small>
                        <br/>
                        <small className="text-secondary pl-2">(not mobile friendly yet)</small>
                    </Card.Title>
                    <hr/>
                    <Form>
                        <Form.Group controlId="username">
                            <Form.Label srOnly>Username</Form.Label>
                            <Form.Control ref={usernameInputRef} type="username" placeholder="Enter Username" value={username} onChange={ e => setUsername(e.target.value) }/>
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label srOnly>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" disabled/>
                        </Form.Group>
                        <Form.Group controlId="rememberMe" className="text-left mt-n2">
                            <Form.Check type="checkbox" label="Remember Me" checked={isRememberMe} onChange={ onRememberMeChange }/>
                        </Form.Group>
                        <Button variant="primary" type="submit" style={{width: "75%"}} onClick={onLogIn}>
                            LogIn
                        </Button>
                    </Form>
                    <Button variant="danger" className="mt-2" style={{width: "75%"}} disabled>Register</Button>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <strong style={{textDecoration:"underline"}}>or login with ...</strong>
                </Card.Footer>
            </LogInFrame>
    )
}

export default LogIn