import React, { Component } from 'react';

export default class Header extends Component {
    render() {
         return (
        <header>
            <nav className="nav">
                <img className="nav-logo" src="scrimba-app\src\React.png" alt='React Logo' />
               <ul className="nav-items">
                    <li><a href="google.com">Pricing</a></li>
                    <li><a href="google.com">About</a></li>
                    <li><a href="google.com">Services</a></li>
                    <li><a href="google.com">Updates</a></li>
                    <li><a href="google.com">Contact</a></li>
                   
                </ul>
                 </nav>
                 <div className='reasons'>
           <ul className='ree'>
            <h1 className='title'style={{color:'red'}}>Fun facts about React</h1>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walker</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
                     </ul>
                     <img src={"logo.png"} alt={'logo'}/>
        </div>
             </header> 
             
         )
    }
}