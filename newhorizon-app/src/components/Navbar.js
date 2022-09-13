import React from "react";

export default function Navbar() {
    
      return (
       <div className="container-fluid">
       <div className="row top">
         <div className="col-md-4">
           <img src="images/logo.png" width="100px" height="150px" className="img-responsive logo" alt=""/>
         </div>
         <div className="col-md-4 flags">
        
            <div>
              <img src="images/ghflag.png" width="50px" height="50px" className="img-responsive" alt=""/>
            </div>
            <div>
              <img src="images/kenyafla.png" width="50px" height="50px" className="img-responsive" alt=""/>
            </div>
            <div>
             <img src="images/Flag-of-Nigeria.png" width="50px" height="50px" className="img-responsive" alt=""/> 
            </div>
            </div>
            <div className="col-md-4 text-right about-link">
              <a href="about">About Us</a>
            </div>
          </div>
        </div>
      );
    }