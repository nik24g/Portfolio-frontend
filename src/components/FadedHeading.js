import React from "react";
import '../css/fadedHeading.css'

export default function FadedHeading(props) {
    return (
        <div>
            <div className="faded-box">
                <span id="faded-heading">{props.heading}</span>
                <p>{props.content}</p>
                <span id="underbar"></span>
            </div>
        </div>
    );
}
