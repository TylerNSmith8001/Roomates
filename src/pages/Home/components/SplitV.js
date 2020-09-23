import React from "react";
import $ from 'jquery'; 
import 'bootstrap';
import { Card, Col, Row } from "react-bootstrap";

import formatMoney from "../../../helpers/formatMoney";
import formatDelta from "../../../helpers/formatDelta";

import AddRoommateOptionsC from "./AddRoommateOptionsC";
import SplitRoommatesC from "./SplitRoommatesC"

function SplitV(props){

    let {
        home,
        splitId,
        splitName,
        splitInstance,  setSplitInstance,
        startDate,      onStartingDateChange,
        endDate,        onEndingDateChange,
        period,         onPeriodChange,
        due,
        delta,

        onSplitTotalChange,
        onSplitTypeChange,

        addRoommateToSplitInstance,
        removeRoommateFromSplitInstance,
        removeSplit
        
    } = props;

    return(
        <Card className="my-4">

            {/* HEADER */}
            <Card.Header onClick={ () => { $(`.split-${splitId}`).collapse('toggle') } }>
                <Row>

                    <Col>
                        <h5 className="m-0 d-flex align-items-center justify-content-start">

                            {/* TOGGLE DETAIL ARROWS */}
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className={`bi bi-arrow-down mr-2 collapse show split-${splitId}`} fill="currentColor">
                                <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                            </svg>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className={`bi bi-arrow-up mr-2 collapse split-${splitId}`} fill="currentColor">
                                <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                            </svg>

                            {/* SPLIT NAME */}
                            {splitName}

                            {/* SPLIT TOTAL */}
                            <span className="text-secondary pl-2">Total: {formatMoney(splitInstance.total)} {formatDelta(delta)}</span>
                        </h5>
                    </Col>

                    <Col className="d-flex align-items-center justify-content-end pr-2">

                        {/* SPLIT DUE */}
                        <h5 className="m-0">
                            Due: {formatMoney(due)}
                        </h5>

                        {/* SPLIT REMOVE */}
                        <button type="button" className="btn btn-light text-danger p-0 ml-2" onClick={ (e) => window.confirm(`Are you sure you want to remove ${splitName} from here?`) && removeSplit(splitId)}>
                            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-x" fill="currentColor">
                                <path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>    
                        </button>
                    </Col>

                </Row>
            </Card.Header>

            {/* BODY */}
            <div className={`card-body collapse split-${splitId}`}>
                <div className="d-flex justify-content-between">

                    {/* SPLIT TOTAL INPUT */}
                    <div className="d-flex">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor={`total-${splitId}`}>Total</label>
                        </div>
                        {/**replace with boot strap date pick extension */}
                        <input id={`total-${splitId}`} style={{width: "6rem", textAlign: "center"}} value={splitInstance.total} onChange={ onSplitTotalChange }/>
                    </div>

                    {/* SPLIT START DATE INPUT */}
                    <div className="d-flex">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor={`startDate-${splitId}`}>Starting Date</label>
                        </div>
                        {/**replace with boot strap date pick extension */}
                        <input type="month" id={`startDate-${splitId}`} style={{width: "8rem", textAlign: "center"}} value={startDate} onChange={ onStartingDateChange } disabled title="disabled - just shows start date for now."/>{/**min="2018-03" value="2018-05"*/}
                    </div>

                    {/* SPLIT PERIOD INPUT */}
                    <div className="d-flex">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor={`period-${splitId}`}>Period</label>
                        </div>
                        {/*replace - there must be a better way to select this kind of thing, research / more thought needed*/}
                        <select id={`period-${splitId}`} style={{width: "8rem", textAlign: "center"}} value={period} onChange={ onPeriodChange } disabled title="disabled - will toggle between period options">{/**ref={} onChange={}*/}
                            <option value="monthly">Monthly</option>
                            <option value="">Weekly</option>
                            <option value="">Biweekly</option>
                            <option value="">3rd wednesdays...</option>
                        </select>
                    </div>

                    {/* SPLIT TYPE INPUT */}
                    <div className="d-flex">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor={`splitType-${splitId}`}>Split Type</label>
                        </div>
                        <select id={`splitType-${splitId}`} style={{width: "6rem", textAlign: "center"}} value={splitInstance.splitType} onChange={ onSplitTypeChange } disabled title="disabled - will toggle between split options">{/**ref={} onChange={}*/}
                            <option value="fraction">¼</option>
                            <option value="percentage">%</option>
                            <option value="explicit">$</option>
                        </select>
                    </div>

                    {/* SPLIT ENDING DATE INPUT */}
                    <div className="d-flex">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor={`endDate-${splitId}`}>Ending Date</label>
                        </div>
                        {/**replace with boot strap date pick extension */}
                        <input type="month" id={`endDate-${splitId}`} style={{width: "8rem", textAlign: "center"}} value={endDate} onChange={ onEndingDateChange } disabled title="disabled - just shows end date for now which should be empty."/>{/**min="2018-03" value="2018-05"*/}
                    </div>
                </div>

                {/* ADD ROOMMATE TO SPLIT CONTROL */}
                <div className="d-flex flex-row-reverse mt-3">
                    <div className="dropdown">
                        <button className="btn btn-light dropdown-toggle" type="button" id={`addRoommateDropDown-${splitId}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <svg width="1.5rem" height="1.5rem" viewBox="0 0 16 16" className="bi bi-person-plus-fill text-success" fill="currentColor">
                                <path fillRule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.5-3a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                            </svg>
                        </button>
                        <div className="dropdown-menu" aria-labelledby={`addRoommateDropDown-${splitId}`}>
                            <AddRoommateOptionsC home_roommateIds={home.roommateIds} split_roommateIds={splitInstance.roommates.map(roommate => roommate.roommateId)} onAddRoommateClicked={addRoommateToSplitInstance}/>
                        </div>
                    </div>
                </div>

                {/* SPLIT ROOMMATES */}
                <SplitRoommatesC splitInstance={splitInstance} setSplitInstance={setSplitInstance} removeRoommateFromSplitInstance={removeRoommateFromSplitInstance}/>
            </div>
        </Card>
    );
}

export default SplitV;