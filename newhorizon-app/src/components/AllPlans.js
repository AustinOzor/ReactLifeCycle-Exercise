import React from "react";
import Plan2 from "./Plan2";
import Plan3 from "./Plan3";
import Plan4 from "./Plan4";
import Plan from "./Plan";


export default function All_Plans() {
    return (
        <div className="mother--plan">
          <Plan
          plan="PLANS"
          firstImage="images/f3.jpg"
          title="VIRTUAL OFFICES"
          text="Our virtual offie allow your
                              business to get our location address
                              phone services and also you become a member
                              of our community with benefits such as access
                              to our meeting rooms."
        />
           <Plan2
          firstImage="images/f1.jpg"
          title="CUSTOMIZED OFFICES"
          text="Our customized offices offer a great location
                              for your business and you can customize your offices
                              to suit your preference. Also, you become a member
                              of our community with benefits such as access
                              to our meeting rooms."
        />
           <Plan3
          firstImage="images/f4.jpg"
          title="SERVICED OFFICES"
          text="Our serviced office offer a great location
                            for your business and we provide services
                            such as internet, utilities and offers from our partners.
                            Also, you become a member of our community with benefits such as access
                              to our meeting rooms."
        />
      <Plan4
          firstImage="images/f2.jpg"
          title="MEETING ROOMS"
          text="Our meeting rooms offer a great location for your
                           meeting with your clients or business partners. We
                           provide presentation equipment and coffe. Also, you become a member
                           of our community with benefits such as access
                           to our meeting rooms."
        />        </div>
    )
}