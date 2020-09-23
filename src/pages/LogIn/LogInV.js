import React, { useEffect, useRef } from "react"
import {Card, Button, Form} from "react-bootstrap"
import LogInFrameV from "../../components/LogInFrameV"
import {Link} from "react-router-dom"

function LogIn(props) {
    
    const {username, onUsernameInputChange, isRememberMe, onRememberMeChange, onLogIn} = props

    //set focus on load to username field
    let usernameInputRef = useRef(null);
    useEffect(() => usernameInputRef.current.focus(),[]);

    return (
            <LogInFrameV>
                <Card.Body>
                    <Card.Title>
                        Log In
                        <hr/>
                    </Card.Title>
                    <small className="text-secondary pl-2">this is a work in progress and is a "mock up" at this point.</small>
                    <br/>
                    <small className="text-secondary pl-2">view this on a full monitor, other resolutions have not been considered.</small>
                    <br/>
                    <small className="text-secondary pl-2">login as "Tony Stark" or "Tyler Smith" or "admin" without a password.</small>
                    <br/>
                    <br/>
                    <Form>
                        <Form.Group controlId="username">
                            <Form.Label srOnly>Username</Form.Label>
                            <Form.Control ref={usernameInputRef} type="username" placeholder="Enter Username" value={username} onChange={ onUsernameInputChange }/>
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
                    <Link to="/forgot-password">Forgot Password</Link>
                    <span className="mx-2">-or-</span>
                    <Link to="/alt-login">Login With ...</Link>
                </Card.Footer>
            </LogInFrameV>
    )
}

export default LogIn