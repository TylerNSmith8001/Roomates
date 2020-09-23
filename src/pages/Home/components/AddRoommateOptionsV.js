import React from 'react';

function AddRoommateOptionsV(props){

    let {buttonData} = props;

                
    let buttons = buttonData.map( 
        button =>   <button className="btn btn-link dropdown-item"
                        key={button.key} 
                        onClick={button.onAddRoommateClicked}
                    >
                        {button.username}
                    </button>
    );

    return(
        <>
            {buttons}
        </>
    );
}

export default AddRoommateOptionsV;