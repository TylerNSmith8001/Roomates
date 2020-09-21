import React from "react"
import {Card} from "react-bootstrap"
import FloatingCenter from "../components/FloatingCenter"
import { useHistory } from 'react-router-dom'

function Setup(props) {

    let history = useHistory()

    return (
        <FloatingCenter>
            <Card bg="primary" border="dark" text="white" style={{ width: '18rem', height: '14rem' }} className="d-inline-block mx-4">
                <Card.Header className="text-center h4 border-dark">
                    Start New Home
                </Card.Header>
                <div className="card-body bg-light text-primary btn" style={{borderRadius: "0px"}} onClick={ () => history.push("/new-home") }>
                    {/*<Card.Text>
                        Start a new home where you can track your expenditures and divide them amongs your roommates.
                    </Card.Text>*/}
                    <svg width="80%" height="100%" viewBox="0 0 16 16" className="bi bi-plus" fill="currentColor">
                        <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </div>
            </Card>
            <Card bg="success" border="dark" text="white" style={{ width: '18rem', height: '14rem' }} className="d-inline-block mx-4">
                <Card.Header className="text-center h4 border-dark">
                    Join a Home
                </Card.Header>
                <div className="card-body bg-light text-success btn" style={{borderRadius: "0px"}} onClick={ () => history.push("/join-home") }>
                    <svg width="80%" height="100%" viewBox="0 0 16 16" className="bi bi-person-plus-fill" fill="currentColor">
                        <path fillRule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.5-3a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                </div>
            </Card>
        </FloatingCenter>
    )
}

export default Setup