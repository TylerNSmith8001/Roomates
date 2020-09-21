import {useContext} from "react"
import {RoommateContext} from "../context/roommateContext"

import roommates from "../data/roommates";

function useRoommate() {
    const [roommate, setRoommate] = useContext(RoommateContext);

    function findRoomateByUsername(username){
        return roommates.find( roomate => roomate.username.toLocaleLowerCase() === username.toLocaleLowerCase() )
    }

    function findRoomateById(id){
        return roommates.find( roomate => roomate.id === id )
    }

    function createRoomate(username, head = null, homeId = null){
        let id = roommates[roommates.length - 1].id + 1;
        let key = roommates.push({id, username, head, homeId}) - 1;
        return roommates[key];
    }
    
    return{roommate, setRoommate, findRoomateByUsername, findRoomateById, createRoomate}
}

export default useRoommate