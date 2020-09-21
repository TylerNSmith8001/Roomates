import React from "react"

function FloatingCenter(props) {
    return (
            <div style={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", maxHeight: "80vh", maxWidth: "80vw"}}>
                {props.children}
            </div>
    )
}

export default FloatingCenter