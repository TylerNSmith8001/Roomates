import {useContext} from "react"
import {RoommateContext} from "../context/roommateContext"

import roommateData from "../data/roommates";

function useRoommate() {
    const [roommate, setRoommate] = useContext(RoommateContext);

    function getRoommateByUsername(username){
        return roommateData.find( roommate => roommate.username.toLocaleLowerCase() === username.toLocaleLowerCase() )
    }

    function getRoommateById(id){
        return roommateData.find( roommate => roommate.id === id )
    }

    function createRoommate(username, head = null, homeId = null){
        let id = roommateData[roommateData.length - 1].id + 1;
        let key = roommateData.push({id, username, head, homeId}) - 1;
        return roommateData[key];
    }
    
    return{roommate, setRoommate, getRoommateByUsername, getRoommateById, createRoommate}
}

export default useRoommate