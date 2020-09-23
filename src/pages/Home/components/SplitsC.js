import React, {useState, useRef} from "react";
import splitsData from "../../../data/splits";
import SplitsV from "./SplitsV";
import SplitC from "./SplitC";


function SplitsC(props){

    let {home, setHome, month: current_month, splitSum, setSplitSum} = props;
    let [splits, setSplits] = useState(splitsData);
    let newSplitNameRef = useRef();

    function onAddSplitClick(e){

        if(!newSplitNameRef.current.value) return;

        let name = newSplitNameRef.current.value;
        let id = (splits[splits.length-1] ? splits[splits.length-1].id : 0) + 1

        let date = new Date();
        date = [
            date.getFullYear(),
            ('0' + (date.getMonth() + 1)).slice(-2),
            ('0' + date.getDate()).slice(-2)
        ].join('-');

        setSplits( prevSplits => [...prevSplits, {
            id,
            name,
            startDate: date,
            endDate: "",
            period: "monthly",
            instances:[
                {
                    id: 1,
                    date,
                    splitType:"explicit",
                    total: 0,
                    roommates:[]
                }
            ]
        }]);
        setHome( prevHome => ({...prevHome, splitIds: [...prevHome.splitIds, id]}));
    }

    function removeSplit(id){
        setSplits( prevSplits => prevSplits.filter( split => split.id !== id ) );
        setHome( prevHome => ({...prevHome, splitIds: prevHome.splitIds.filter( temp_id => temp_id !== id )}));
        setSplitSum( prevSplitSum => ({
            total: {...prevSplitSum.total, [id]: 0},
            due: {...prevSplitSum.due, [id]:0},
            delta: {...prevSplitSum.delta, [id]:0}
        }));
    }

    function genSplits(){
        return splits.filter(
            split => 
                home.splitIds.includes(split.id)
                &&
                current_month >= split.startDate.slice(0,-3)
                &&
                (
                    current_month <= split.endDate
                    ||
                    !split.endDate
                )
        ).map( split => <SplitC key={split.id} split={split} current_month={current_month} home={home} splitSum={splitSum} setSplitSum={setSplitSum} removeSplit={removeSplit}/>)
    }

    let foundSplits = genSplits();

    return(
        <SplitsV
            foundSplits={foundSplits}
            newSplitNameRef={newSplitNameRef}
            onAddSplitClick={onAddSplitClick}
        />
    );
}

export default SplitsC;