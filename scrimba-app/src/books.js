import React from "react"

export default function books(props) {
    return (
        <div>
            {props.autor && <h3>Setup: {props.autor}</h3>}
            <p>Title: {props.booktitle}</p>
            <hr />
        </div>
    )
}