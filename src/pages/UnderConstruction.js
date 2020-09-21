import React from "react"
import {Card} from "react-bootstrap"
import LogInFrame from "../components/LogInFrame"
import { useHistory } from 'react-router-dom'


function UnderConstruction(props) {

    let history = useHistory()

    return (
            <LogInFrame>
                <Card.Body>
                    <Card.Title>
                        Under Construction
                    </Card.Title>
                    <Card.Text>
                        This feature is still under construction and is unavailable at this time.
                        Thank you for your patience.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <button type="button" class="btn btn-link" onClick={ e => { e.preventDefault(); history.goBack() }}>Go Back</button>
                </Card.Footer>
            </LogInFrame>
    )
}

export default UnderConstruction