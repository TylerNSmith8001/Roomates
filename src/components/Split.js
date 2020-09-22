import React, {useState} from "react";
import $ from 'jquery'; 
import 'bootstrap';
import { Card, Col, Row } from "react-bootstrap";
import formatMoney from "../helpers/formatMoney";
import useRoommate from "../hooks/useRoommate";
import AddRoommateOptions from "./AddRoommateOptions";
import SplitRoommates from "./SplitRoommates"

function Split(props){

    let {id, name, startDate, endDate, period, instances} = props.split;
    let {current_month, home} = props;
    let {roommate, setRoommate} = useRoommate();


    //this can't handle the case when there isn't an instance for this month yet.
    let [splitInstance, setSplitInstance] = useState(instances.find( instance => current_month < instance.date && `${current_month}-32` > instance.date));
    let {split: my_split} = splitInstance.roommates.find( r => r.roommateId === roommate.id );
    let delta = splitInstance.roommates.reduce( (t, r) => t + r.split, 0 ) - splitInstance.total;
    let delta_display = delta ? <span className="text-warning">(Δ= {formatMoney(delta)})</span> : ""

    function addRoommateToSplitInstance(roommateId){
        setSplitInstance(
            (prevInstance) => ({
                ...prevInstance,
                roommates: [
                    ...prevInstance.roommates,
                    {
                        roommateId,
                        split: 0
                    }
                ]
            })
        );
    }

    function removeRoommateFromSplitInstance(roommateId){
        setSplitInstance(
            (prevInstance) => ({
                ...prevInstance,
                roommates: [
                    ...prevInstance.roommates.filter( r => r.roommateId !== roommateId )
                ]
            })
        )
    }

    return(
        <Card className="m-3 p-0 btn text-left" onClick={ () => { $(`.split-${id}`).collapse('toggle') } }>
        {/**replace - make onClick for collapse check target to make sure it isn't and input or button or something useful, we only want to toggle when we click empty space */}
            <Card.Header>
                <Row>
                    <Col>
                        <h5 className="m-0">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className={`bi bi-arrow-down mr-2 collapse show split-${id}`} fill="currentColor">
                                <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                            </svg>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className={`bi bi-arrow-up mr-2 collapse split-${id}`} fill="currentColor">
                                <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                            </svg>
                            {name} <span className="text-secondary">Total: {formatMoney(splitInstance.total)} {delta_display}</span>
                        </h5>
                    </Col>
                    <Col>
                        <h5 className="m-0 text-right">
                            Due: {formatMoney(my_split)}
                        </h5>
                    </Col>
                </Row>
            </Card.Header>
            <div className={`card-body collapse split-${id}`}>
                <Row className="text-center">
                    {/*replace with flex display for better spacing*/}
                    <Col>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor={`startDate-${id}`}>Starting Date</label>
                            </div>
                            {/**replace with boot strap date pick extension */}
                            <input type="month" id={`startDate-${id}`} style={{width: "8rem", textAlign: "center"}} value={startDate} onChange={ () => {} } disabled title="disabled - just shows start date for now."/>{/**min="2018-03" value="2018-05"*/}
                        </div>
                    </Col>
                    <Col>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor={`period-${id}`}>Period</label>
                            </div>
                            {/*replace - there must be a better way to select this kind of thing, research / more thought needed*/}
                            <select id={`period-${id}`} style={{width: "8rem", textAlign: "center"}} value={period} onChange={ () => {} } disabled title="disabled - will toggle between period options">{/**ref={} onChange={}*/}
                                <option value="monthly">Monthly</option>
                                <option value="">Weekly</option>
                                <option value="">Biweekly</option>
                                <option value="">3rd wednesdays...</option>
                            </select>
                        </div>
                    </Col>
                    <Col>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor={`splitType-${id}`}>Split Type</label>
                            </div>
                            <select id={`splitType-${id}`} style={{width: "6rem", textAlign: "center"}} value={splitInstance.splitType} onChange={ () => {} } disabled title="disabled - will toggle between split options">{/**ref={} onChange={}*/}
                                <option value="fraction">¼</option>
                                <option value="percentage">%</option>
                                <option value="explicit">$</option>
                            </select>
                        </div>
                    </Col>
                    <Col >
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor={`endDate-${id}`}>Starting Date</label>
                            </div>
                            {/**replace with boot strap date pick extension */}
                            <input type="month" id={`endDate-${id}`} style={{width: "8rem", textAlign: "center"}} value={endDate} onChange={ () => {} } disabled title="disabled - just shows end date for now which should be empty."/>{/**min="2018-03" value="2018-05"*/}
                        </div>
                    </Col>
                </Row>
                <div className="d-flex flex-row-reverse mt-3">
                    <div className="dropdown">
                        <button className="btn btn-light dropdown-toggle" type="button" id={`addRoommateDropDown-${id}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <svg width="1.5rem" height="1.5rem" viewBox="0 0 16 16" className="bi bi-person-plus-fill text-success" fill="currentColor">
                                <path fillRule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.5-3a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                            </svg>
                        </button>
                        <div className="dropdown-menu" aria-labelledby={`addRoommateDropDown-${id}`}>
                            <AddRoommateOptions home_roommateIds={home.roommateIds} split_roommateIds={splitInstance.roommates.map(roommate => roommate.roommateId)} clickHandler={addRoommateToSplitInstance}/>
                        </div>
                    </div>
                </div>
                <SplitRoommates splitInstance={splitInstance} setSplitInstance={setSplitInstance}/>
            </div>
        </Card>
    );
}

export default Split;