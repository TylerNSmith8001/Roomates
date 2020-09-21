import React, { useState, useEffect, useRef } from "react"
import {Card, Button, Form} from "react-bootstrap"
import useRoommate from "./hooks/useRoommate"

function LogIn(props) {
    //destructor props
    let {setIsLoggedIn} = props;

    //control input
    let [username, setUsername] = useState("");

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

        console.log(temp_roommate);

        //flag as logged in
        setIsLoggedIn(true);
    }

    return (
            <div className="d-flex justify-content-center align-items-center" style={{width: "100vw", height: "100vh"}}>

                <Card className="text-center" style={{width: "24rem"}}>
                    <Card.Header>
                        <div className="my-n2">
                            <div className="text-secondary mb-n2 mt-2"><small>and they where...</small></div>
                            <h1 className="text-primary position-relative">
                                Roommates
                                <div className="text-warning position-absolute" style={{top:0, right:0}}>
                                    WIP
                                </div>
                            </h1>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>
                            LogIn
                            <br/>
                            <small className="text-secondary pl-2">(mock up - just provide username and "login")</small>
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
                                <Form.Check type="checkbox" label="Remember Me" disabled/>
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
                </Card>
            </div>
    )
}

export default LogIn

/*
<div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Sign In</h5>
                            <form className="form-signin">
                                <div className="form-label-group">
                                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
                                    <label for="inputEmail">Email address</label>
                                </div>

                                <div className="form-label-group">
                                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                                    <label for="inputPassword">Password</label>
                                </div>

                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                    <label className="custom-control-label" for="customCheck1">Remember password</label>
                                </div>

                                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                                <hr className="my-4"/>
                                <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Sign in with Google</button>
                                <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
*/