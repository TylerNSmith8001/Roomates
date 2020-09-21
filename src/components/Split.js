import React from "react";
import { Card, Col, Row } from "react-bootstrap";

function Split(props){

    console.debug(props);
    let {name} = props.split;

    return(
        <Card className="m-3">
            <Card.Header>
                <Row>
                    <Col>
                        <h5 className="m-0">
                            > {name} <span className="ml-2">Total: $??.?? (+/-Δ)</span>
                        </h5>
                    </Col>
                    <Col>
                        <h3 className="m-0 text-right">
                            Due: $??.??
                        </h3>
                    </Col>
                </Row>
            </Card.Header>
            <div className="card-body">
                settings and people will go here
            </div>
        </Card>
    );
}

export default Split;