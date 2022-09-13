import React from "react";


export default function About() {
    return (
       
        <div className="about">
            <div>
             <h2 className="name">Augustine Ozor</h2>
                <h4>Frontend Developer</h4>
                <h5>austinO@gmail.com</h5>
            </div>
            <div className="social_icons">
                <button type="submit" className="email"><i class="fa-solid fa-envelope"></i>  Email</button> 
                 <button type="submit" className="linkedin"><i class="fa-brands fa-linkedin"></i>  LinkedIn</button>
            </div>
            <h2 className="title">About</h2>
            <p>
         I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
            Interests
            </p>
        </div>
       
    )
};