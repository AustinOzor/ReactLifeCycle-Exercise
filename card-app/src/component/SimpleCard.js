import React, { Component } from "react";
import Card from "./Card";
import Title from "./Title";

class SimpleCard extends Component {
    render() {
        return (
            <div className="card_body">
                <Card />
                <Title cardName="Business Card"/>
             
            </div>
        )
    }
}

export default SimpleCard;