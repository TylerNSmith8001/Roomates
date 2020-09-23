import React, { useState } from "react"
import useRoommate from "../../hooks/useRoommate"
import homeData from "../../data/homes";
import formatMoney from '../../helpers/formatMoney';
import formatDelta from '../../helpers/formatDelta';

import HomeV from "./HomeV";

function HomeC() {

    let {roommate, setRoommate} = useRoommate();

    let [home, setHome] = useState( homeData.find( home => home.id === roommate.homeId) );
    let [month, setMonth] = useState(new Date().toISOString().substr(0, 7));
    let [view, setView] = useState("view");
    let [splitSum, setSplitSum] = useState({total: {0:0}, due: {0:0}, delta: {0:0}});

    function onViewChange(e){
        e.persist();
        setView(e.target.value);
    }

    function onMonthChange(e){
        e.persist();
        setMonth(e.target.value);
    }

    function getSplitSumByType(typ){
        let value = Object.values(splitSum[typ]).reduce((t, n) => t + n);
        return typ === 'delta' ? formatDelta(value) : formatMoney(value);
    }

    return (
        <HomeV
            roommate={roommate} setRoommate={setRoommate}
            view={view}         setView={setView}
            month={month}       setMonth={setMonth}
            home={home}         setHome={setHome}
            splitSum={splitSum} setSplitSum={setSplitSum}

            onViewChange={onViewChange}
            onMonthChange={onMonthChange}
            getSplitSumByType={getSplitSumByType}
        />
    )
}

export default HomeC