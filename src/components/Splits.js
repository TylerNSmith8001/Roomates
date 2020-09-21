import React from "react";
import splits from "../data/splits";
import Split from "../components/Split"

function Splits(props){

    let {roommate, home, month: current_month, view} = props;

    let found_splits = splits.filter(
            split => 
                home.splitIds.includes(split.id)
                &&
                current_month >= split.startDate
                &&
                (
                    current_month <= split.endDate
                    ||
                    !split.endDate
                )
    ).map( split => <Split key={split.id} split={split}/>);

    console.debug(found_splits);

    return(
        <>
            {found_splits}
        </>
    );
}

export default Splits;