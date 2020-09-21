import React, {createContext, useState} from "react"
const RoommateContext = createContext()

function RoommateContextProvider(props){
    let [roommate, setRoommate] = useState({id:null, username:null});

    return (
        <RoommateContext.Provider value={[roommate, setRoommate]}>
            {props.children}
        </RoommateContext.Provider>
    )

}
export {RoommateContextProvider, RoommateContext}