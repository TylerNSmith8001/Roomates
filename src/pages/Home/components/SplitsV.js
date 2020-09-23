import React from "react";

function SplitsV(props){

    let {
        foundSplits,
        newSplitNameRef,
        onAddSplitClick
    } = props;

    return(
        <>
            <div className="d-flex mt-3">
                <input ref={newSplitNameRef} style={{width: "12rem", textAlign: "center"}} placeholder="New split's name"/>
                <button className="btn btn-primary" onClick={ onAddSplitClick }>
                    Add Split
                </button>
            </div>
            {foundSplits}
        </>
    );
}

export default SplitsV;