import React, {useEffect, useState} from "react";

import useRoommate from "../../../hooks/useRoommate";

import SplitV from "./SplitV";

function SplitC(props){

    let {id: splitId, name: splitName, startDate, endDate, period, instances} = props.split;
    let {current_month, home, setSplitSum, removeSplit} = props;
    let {roommate} = useRoommate();


    //this can't handle the case when there isn't an instance for this month yet.
    let [splitInstance, setSplitInstance] = useState(instances.find( instance => current_month < instance.date && `${current_month}-32` > instance.date));
    let {split: due} = splitInstance.roommates.find( r => r.roommateId === roommate.id ) || {split:0};
    let delta = splitInstance.roommates.reduce( (t, r) => t + r.split, 0 ) - splitInstance.total;

    useEffect( () => {
        setSplitSum( prevSplitSum => ({
            total: {...prevSplitSum.total, [splitId]: splitInstance.total},
            due: {...prevSplitSum.due, [splitId]:due},
            delta: {...prevSplitSum.delta, [splitId]:Math.abs(delta)}
        }));
    }, [splitInstance,delta] );

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

    function onSplitTotalChange(e){
        e.persist();
        let value = e.target.value.trim();
        if(value.includes('.'))
            value += '0'

        setSplitInstance( prevSplitInstance => ({...prevSplitInstance, total: isNaN(Math.round(value)) ? 0 : Math.round(value) }))
    }

    function onStartingDateChange(e){}
    function onPeriodChange(e){}
    function onSplitTypeChange(e){}
    function onEndingDateChange(e){}

    return(
        <SplitV
            home={home}
            splitId={splitId}
            splitName={splitName}
            splitInstance={splitInstance}       setSplitInstance={setSplitInstance}
            startDate={startDate}               onStartingDateChange={onStartingDateChange}
            endDate={endDate}                   onEndingDateChange={onEndingDateChange}
            period={period}                     onPeriodChange={onPeriodChange}
            due={due}
            delta={delta}

            onSplitTotalChange={onSplitTotalChange}
            onSplitTypeChange={onSplitTypeChange}

            addRoommateToSplitInstance={addRoommateToSplitInstance}
            removeRoommateFromSplitInstance={removeRoommateFromSplitInstance}
            removeSplit={removeSplit}
        />
    );
}

export default SplitC;