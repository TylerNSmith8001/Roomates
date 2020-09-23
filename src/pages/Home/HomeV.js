import React from "react"
import { Card, Col, Row, Button } from "react-bootstrap";
import SplitsC from "./components/SplitsC";

function HomeV(props) {

    let {
        roommate,
        view,
        month,
        home,       setHome,
        splitSum,   setSplitSum,

        onViewChange,
        onMonthChange,
        getSplitSumByType
    } = props;

    return (
        <Card className="m-3">
            {/* HEADER */}
            <Card.Header>
                <Row>
                    <Col>
                        {/* NAME */}
                        <h3 className="m-0">
                            {home.name}
                        </h3>
                    </Col>

                    <Col className="d-flex flex-row-reverse">

                        {/* SETTINGS BUTTON */}
                        <Button variant="dark" className="ml-2 p-1" disabled title="disabled - will hide / show a section under Home header">
                            <svg width="1.5rem" height="1.5rem" viewBox="0 0 16 16" className="bi bi-gear-fill" fill="currentColor">
                                <path fillRule="evenodd" d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 0 0-5.86 2.929 2.929 0 0 0 0 5.858z"/>
                            </svg>
                        </Button>

                        {/* VIEW SELECTOR */}
                        <div className="mx-2">
                            {/*replace with button toggle component*/}
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="viewSelect">View</label>
                              </div>
                              <select id="viewSelect" style={{width: "6rem", textAlign: "center"}} value={view} onChange={ onViewChange } disabled title="disabled - will toggle between view options, list only for now, might become a button toggle">{/**ref={} onChange={}*/}
                                <option value="list">List</option>
                                <option value="Calendar">Calendar</option>
                              </select>
                            </div>
                        </div>

                        {/* MONTH SELECTOR */}
                        <div className="mr-2">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="monthPicker">Month</label>
                              </div>
                              {/**replace with boot strap date pick extension */}
                              <input type="month" id="monthPicker" style={{width: "6rem", textAlign: "center"}} value={month} onChange={ onMonthChange } disabled title="disabled - will select what month is to be shown - needs replace with bootstrap date picker"/>{/**min="2018-03" value="2018-05"*/}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Card.Header>

            {/* BODY aka splits */}
            <div className="card-body py-1">
                <SplitsC roommate={roommate} home={home} setHome={setHome} month={month} view={view} splitSum={splitSum} setSplitSum={setSplitSum}/>
            </div>

            <Card.Footer>
                <Row>
                    <Col>
                        {/* MONTH TOTAL & DELTA */}
                        <h3 className="m-0">
                            Total: {getSplitSumByType('total')} {getSplitSumByType('delta')}
                        </h3>
                    </Col>
                    <Col>
                        {/* MONTH DUE */}
                        <h3 className="m-0 text-right">
                            Due: {getSplitSumByType('due')}
                        </h3>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
}

export default HomeV