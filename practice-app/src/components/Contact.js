import React from "react";

export default function Contact({img, name, telephone, email }) {
    return (
        <div className="contacts">
            <div className="contact-card">
                <img src={img} alt=""/>
                <h3>{name}</h3>
                <div className="info-group">
                  
                    <p>  <i class="fa-solid fa-phone"></i>  {telephone} </p>
                </div>
                <div className="info-group">
                    <p>  <i class="fa-solid fa-envelope"></i> {email}  </p>
                </div>
            </div>
            </div>
    )
}