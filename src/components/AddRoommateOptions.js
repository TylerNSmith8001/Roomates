import React from 'react';
import roommates from '../data/roommates';

function AddRoommateOptions(props){

    let {home_roommateIds, split_roommateIds, clickHandler} = props;

    let buttons = home_roommateIds
        .filter( id => !split_roommateIds.includes(id) )
            .map( roommateId => {
                let username = roommates.find( r => r.id === roommateId).username;
                return <button key={roommateId} className="btn btn-link dropdown-item" onClick={ () => {clickHandler(roommateId)} }>{username}</button>
            })

    return(
        <>
            {buttons}
        </>
    );
}

export default AddRoommateOptions;