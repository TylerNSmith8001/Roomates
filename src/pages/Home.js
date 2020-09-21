import React, { useState, useEffect, useRef } from "react"
import { Card, Col, Row, Button } from "react-bootstrap";
import useRoommate from "../hooks/useRoommate"
import homes from "../data/homes";
import Splits from "../components/Splits";

function Home(props) {

    let {roommate, setRoommate} = useRoommate();

    let [home, setHome] = useState(
        homes.find( home => home.id == roommate.homeId)
    );

    let [month, setMonth] = useState(new Date().toISOString().substr(0, 7));
    let [view, setView] = useState("view");

    return (
        <Card className="m-3">
            <Card.Header>
                <Row>
                    <Col>
                        <h3 className="m-0">
                            {home.name}
                        </h3>
                    </Col>
                    <Col className="d-flex flex-row-reverse">

                        <Button variant="dark" className="ml-2 p-1" disabled title="disabled - will hide / show a section under Home header">
                            <svg width="1.5rem" height="1.5rem" viewBox="0 0 16 16" className="bi bi-gear-fill" fill="currentColor">
                                <path fillRule="evenodd" d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 0 0-5.86 2.929 2.929 0 0 0 0 5.858z"/>
                            </svg>
                        </Button>
                        <div className="mx-2">
                            {/*replace with button toggle component*/}
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="viewSelect">View</label>
                              </div>
                              <select id="viewSelect" value={view} onChange={ e => setView(e.target.value) } disabled title="disabled - will toggle between view options, list only for now, might become a button toggle">{/**ref={} onChange={}*/}
                                <option value="list">List</option>
                                <option value="Calendar">Calendar</option>
                              </select>
                            </div>
                        </div>
                        <div className="mr-2">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="monthPicker">Month</label>
                              </div>
                              {/**replace with boot strap date pick extension */}
                              <input type="month" id="monthPicker" value={month} onChange={ e => setMonth(e.target.value) } disabled title="disabled - will select what month is to be shown - needs replace with bootstrap date picker"/>{/**min="2018-03" value="2018-05"*/}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Card.Header>
            <div className="card-body">
                <Splits roommate={roommate} home={home} month={month} view={view}/>
            </div>
            <Card.Footer>
                <Row>
                    <Col>
                        <h3 className="m-0">
                            Due: $??.??
                        </h3>
                    </Col>
                    <Col>
                        <h3 className="m-0 text-right">
                            Total: $??.?? (+/-Δ)
                        </h3>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
}

export default Home