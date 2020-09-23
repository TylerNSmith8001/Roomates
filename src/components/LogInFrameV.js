import React from "react"
import {Card} from "react-bootstrap"
import FloatingCenterV from "./FloatingCenterV"

function LogInFrameV(props) {
    return (
            <FloatingCenterV>
                <Card className="text-center" style={{width: "26rem"}}>
                    <Card.Header>
                        <div className="my-n2">
                            <div className="text-secondary mb-n2 mt-2"><small>and they were...</small></div>
                            <h1 className="text-primary position-relative">
                                Roommates
                                <div className="text-warning position-absolute" style={{top:0, right:0}}>
                                    WIP
                                </div>
                                <img src="/android-chrome-192x192.png" alt="Smiling Face with Smiling Eyes and Hand Covering Mouth" className="position-absolute" style={{top:"-0.5rem", left:"0.5rem", height:"3rem", width:"3rem"}}/>
                            </h1>
                        </div>
                    </Card.Header>
                    {props.children}
                </Card>
            </FloatingCenterV>
    )
}

export default LogInFrameV