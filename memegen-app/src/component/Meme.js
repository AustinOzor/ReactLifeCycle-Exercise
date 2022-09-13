import React from "react";
import memeData from "./memeData";


export default function Meme() {
const [memeImage, setMemeImage] = React.useState("")

    function getMeme() {
        const memeArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url
        setMemeImage(memeArray[randomNumber].url)
    }
    return (
        <main>
         <div className="form">
             <input className="form--input" type="text" placeholder="shut up"/>
             <input className="form--input" type="text" placeholder="and take my money"/>
             <button onClick={getMeme} className="form--button" type="submit">Get a nee meme image</button>
            </div>
        <img src={memeImage} className="meme--image" alt=""/>
        </main>
    )
}