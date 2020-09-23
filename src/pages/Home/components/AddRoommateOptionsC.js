import React from 'react';
import roommateData from '../../../data/roommates';
import AddRoommateOptionsV from './AddRoommateOptionsV';

function AddRoommateOptionsC(props){

    let {home_roommateIds, split_roommateIds, onAddRoommateClicked} = props;

    let buttonData = home_roommateIds
        .filter( id => !split_roommateIds.includes(id) )
            .map( roommateId => {
                let username = roommateData.find( r => r.id === roommateId).username;
                return {
                    key: roommateId,
                    username,
                    onAddRoommateClicked: () => onAddRoommateClicked(roommateId),
                }
            })

    return(
        <AddRoommateOptionsV
            buttonData={buttonData}
        />
    );
}

export default AddRoommateOptionsC;