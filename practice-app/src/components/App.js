import React from "react";
import Main from "./Main";
import Navbar from "./Navbar";
import "./index.css";
import Contact from "./Contact";

function App() {
    return (
        <div>
            <Navbar />
            <Main />
            <Contact
                img="cat1.jpg"
                name="Mr. Whiskerson"
                telephone="(212) 555-1234"
             email="mr.whiskaz@catnap.meow"
            />
            <Contact
                img="cat2.jpg"
                name="Mr. Richardson"
                telephone="(212) 555-1234"
             email="mr.whiskaz@catnap.meow"
            />
            <Contact
                img="cat3.webp"
                name="Mr. Felix"
                telephone="(212) 555-1234"
             email="mr.whiskaz@catnap.meow"
            />
            <Contact
                img="cat4.jpg"
                name="Mr. Brown"
                telephone="(212) 555-1234"
             email="mr.whiskaz@catnap.meow"
            />
        </div>

    )
}
export default App;