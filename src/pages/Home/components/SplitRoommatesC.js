import React from 'react';
import roommateData from '../../../data/roommates';
import SplitRoommatesV from './SplitRoommatesV';

function SplitRoommatesC(props){

    let {splitInstance, setSplitInstance, removeRoommateFromSplitInstance} = props;

    function handleSetSplitInstance(roommateId, value){
        setSplitInstance( prevSplitInstance => {
            return {
                ...prevSplitInstance,
                roommates: prevSplitInstance.roommates.map( roommate => (
                    roommate.roommateId !== roommateId
                        ?
                        roommate
                        :
                        {
                            ...roommate,
                            split: isNaN(Math.round(value)) ?
                                0
                                :
                                Math.round(value)
                        }
                ))
            }
        } );
    }

    //building object containind the data needed to display Roomates
    let splitRoommateData = splitInstance.roommates.map( r => {

        let {roommateId, split} = r;
        let {username} = roommateData.find( r => r.id === roommateId );

        //building function that handles
        function handleSplitChange(e){
            e.persist();
            let value = e.target.value.trim();
            if(value.includes('.'))
                value += '0';

            handleSetSplitInstance(roommateId, value);
        }

        return  {
            roommateId,
            username,
            removeRoommateFromSplitInstance,
            split,
            handleSplitChange
        }
    });

    return(
        <SplitRoommatesV splitRoommateData={splitRoommateData} />
    );
}

export default SplitRoommatesC;