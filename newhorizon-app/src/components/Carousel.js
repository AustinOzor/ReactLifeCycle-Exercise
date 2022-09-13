import React from "react";

export default function Carousel() {
    return (
          <div className="container-fluid" >
        <div className="row carousel-body">
                <div id="carousel-example-generic" className="carousel slide carousel-container" data-ride="carousel">
                
                    <ol className="carousel-indicators">
                      <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                      <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                      <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                    </ol>
                  
               
                    <div className="carousel-inner carousel-img" role="listbox">
                      <div className="item active">
                        <img src="images/main b.jpg"  className="img-responsive" alt=""/>
                        
                      </div>
                      <div className="item">
                        <img src="images/b1.jpg"   className="img-responsive" alt=""/>
                        </div>
                      <div className="item">
                        <img src="images/b2.jpg"   className="img-responsive" alt=""/>
                       
                      </div>
                      ...
                      <div className="item">
                        <img src="images/b4.jpg"   className="img-responsive" alt=""/>
                        <div className="carousel-caption">
                          ...
                        </div>
                      </div>
                      ...
                    </div>
           
                    <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                      <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                      <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
            </div>
        </div>

    )
}