import React from "react";

export default function Plan() {
    return (
        <div className="container plan">
        <h1 className="text-center plan-header">PLANS</h1>
        <div className="row">            
             <div className="col-md-3 text-center">
                <div className="thumbnail">
              <img src="images/f3.jpg" className="img-responsive " alt="" style={{height:200}}/>
                      <div className="caption text-center">
                        <h5>VIRTUAL OFFICES</h5>
                        <p style={{lineHieght:1.68}}>Our virtual office allow your
                            business to get our location address
                            phone services and also you become a member
                            of our community with benefits such as access
                            to our meeting rooms.
                        </p>
                      </div>
                    </div>
                
                  </div>
                <div className="col-md-3 text-center">
                    <div className="thumbnail">
                      <img src="images/f1.jpg" className="img-responsive " alt=""  style={{height:200}}/>
                      <div className="caption">
                        <h5>CUSTOMIZED OFFICES</h5>
                        <p>Our customized offices offer a great location
                            for your business and you can customize your offices
                            to suit your preference. Also, you become a member
                            of our community with benefits such as access
                            to our meeting rooms.
                        </p>
                      </div>
                    </div>
                
                  </div>
                <div className="col-md-3 text-center">
                    <div className="thumbnail">
              <img src="images/f4.jpg" className="img-responsive " alt="" style={{ height: 200, width:"auto"}}/>
                      <div className="caption">
                        <h5>SERVICED OFFICES</h5>
                        <p>Our serviced office offer a great location
                          for your business and we provide services
                          such as internet, utilities and offers from our partners.
                          Also, you become a member of our community with benefits such as access
                            to our meeting rooms. 
                        </p>
                      </div>
                    </div>
                
                  </div>
                <div class="col-md-3 text-center">
                    <div class="thumbnail">
                      <img src="images/f2.jpg" class="img-responsive " alt="" style={{ height: 200, width:"auto"}}/>
                      <div class="caption">
                        <h5>MEETING ROOMS</h5>
                        <p>Our meeting rooms offer a great location for your
                         meeting with your clients or business partners. We 
                         provide presentation equipment and coffe. Also, you become a member
                         of our community with benefits such as access
                         to our meeting rooms.
                         
                        </p>
                      </div>
                    </div>
                
                  </div>
        </div>
    </div>
    )
}