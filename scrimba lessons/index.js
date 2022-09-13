// ReactDOM.render(<ul>
//     <li>Html</li>
//     <li>Css</li>
//     <li>Bootstrap</li>
//     <li>JavaScript</li>
//     <li>React</li>
//     </ul>, document.getElementById("root"))
// // ReactDOM.render(<p>This is my first React code</p>, document.getElementsByTagName("div p"))
// ReactDOM.render(document.getElementById("root").style.color = 'red')
// ReactDOM.render(document.getElementsByTagName("ul li ").style.textDecoration = 'none')

// import React from "react"
// import ReactDOM from "react-dom"


// const navbar = (
//     <nav>
//         <h1 className="header">Easy Bite</h1>
//         <ul>
//             <li><a href="#">Pricing</a></li>
//             <li><a href="#">About</a></li>
//             <li><a href="#">Contact</a></li>
//         </ul>
//         </nav>
// )
// ReactDOM.render(
//     navbar,
//     document.getElementById("root")
// )


//Creating Static Page//
// const static_page = (
//     <div>
//         <img src="logo.png" width= "40px"/>
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K stars on Github</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// )


function Static_page() {
   return (
        <div>
            <img src="logo.png" width="40px" />
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

ReactDOM.render(
    <Static_page/>,
    document.getElementById("root"))

// import React from "react"
// import ReactDOM from "react-dom" 
// import Header from "./Header"
function Header() {
    return (
        <header>
            <nav className="nav">
                <img className="nav-logo" src="React.png"  />
               <ul className="nav-items">
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Updates</a></li>
                    <li><a href="#">Contact</a></li>
                   
                </ul>
            </nav>
       </header> 
    )
}



function Footer () {
    return (
        <footer className="footer">&copy; Ozor Development. All rights reserved</footer>

    )
}
function WhyReact() {
    return (
        <div>
           <Header/>
            <OrderedList />
           <Footer/> 
            
        </div>
    )
}

ReactDOM.render(
    <WhyReact />, 
    document.getElementById("root")
)