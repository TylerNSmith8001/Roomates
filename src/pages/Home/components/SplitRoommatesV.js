import React from 'react';
import formatMoney from '../../../helpers/formatMoney';

function SplitRoommatesV(props){

    let {splitRoommateData} = props;

    let roommateDisplays = splitRoommateData.map( roommateInfo => {

        let {
            roommateId,
            username,
            removeRoommateFromSplitInstance,
            split,
            handleSplitChange
        } = roommateInfo;

        return  <div key={roommateId} className="d-flex px-3 py-1 my-2 align-items-center justify-content-between border rounded-pill bg-light">
                    <div>
                        {/* REMOVE ROOMMATE FROM SPLIT BUTTON */}
                        <button type="button" className="btn btn-light text-danger p-1 mr-2" onClick={ () => window.confirm(`Are you sure you want to remove ${username} from here?`) && removeRoommateFromSplitInstance(roommateId) }>
                            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-person-x-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>

                        {/* ROOMMATE NAME */}
                        <span className="h5 d-inline-block p-0 m-0 pr-2">{username}</span>

                        {/* ROOMMATE DUE */}
                        <span className="text-secondary">Due: {formatMoney(split)}</span>
                    </div>

                    <span>
                        {/* ROOMMATE SPLIT INPUT */}
                        $<input className="ml-2" style={{width:"6rem"}} value={split} onChange={handleSplitChange}/>
                    </span>
                </div>
    } );

    return(
        <>
            {roommateDisplays}
        </>
    );
}

export default SplitRoommatesV;