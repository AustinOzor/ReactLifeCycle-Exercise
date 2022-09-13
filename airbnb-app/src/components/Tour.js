import React from "react";

function Tour(props) {
    console.log(props)
    return(
        <div className="trip">
            <img src={`../images/${props.trip.img}`} className="trip--image" alt="" />

            <div className="trip--stats">
                <img src="../images/location.png"
                    className="location-icon" alt="" />

                <span className="trip-location">{props.trip.location}</span>  
                <span className="gray">{props.trip.googleMapsUrl}</span>

                <h1 className="trip-title">{props.trip.title}</h1>
                <span className="start--date">{props.trip.startDate}</span>-  
                 <span className="end--date">{props.trip.endDate}</span>
                <p className="trip-description">{props.trip.description}</p>
            </div>
        </div>
    )
}
export default Tour;

