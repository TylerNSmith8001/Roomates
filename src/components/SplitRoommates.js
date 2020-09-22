import React from 'react';
import roommates from '../data/roommates';
import formatMoney from '../helpers/formatMoney'

function SplitRoommates(props){

    let {splitInstance, setSplitInstance} = props;

    let roommateDisplays = splitInstance.roommates.map( r => {

        let {roommateId, split} = r;
        let {username} = roommates.find( r => r.id === roommateId );

    return  <div key={roommateId} className="d-flex px-3 py-1 my-2 align-items-center justify-content-between border rounded-pill bg-light">
                <div>
                    <span className="h5 d-inline-block p-0 m-0 pr-2">{username}</span>
                    <span className="text-secondary">Due: {formatMoney(split)}</span>
                </div>
                <span>
                    $
                    <input style={{width:"6rem"}} value={split} onChange={ (e) => {
                        e.persist();
                        let value = e.target.value.trim();
                        if(value.includes('.'))
                            value += '0'

                        setSplitInstance( prevSplitInstance => {
                            console.log(prevSplitInstance);
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
                        } )
                    }}/>
                </span>
            </div>
    });

    return(
        <>
            {roommateDisplays}
        </>
    );
}

export default SplitRoommates;