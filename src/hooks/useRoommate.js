import {useContext} from "react"
import {RoommateContext} from "../context/roommateContext"

import roommates from "../data/roommates";

function useRoommate() {
    const [roommate, setRoommate] = useContext(RoommateContext);

    function getRoommateByUsername(username){
        return roommates.find( roommate => roommate.username.toLocaleLowerCase() === username.toLocaleLowerCase() )
    }

    function getRoommateById(id){
        return roommates.find( roommate => roommate.id === id )
    }

    function createRoommate(username, head = null, homeId = null){
        let id = roommates[roommates.length - 1].id + 1;
        let key = roommates.push({id, username, head, homeId}) - 1;
        return roommates[key];
    }
    
    return{roommate, setRoommate, getRoommateByUsername, getRoommateById, createRoommate}
}

export default useRoommate