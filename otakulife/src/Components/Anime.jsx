import { useState, useEffect } from "react"
import axios from "axios"

export default function Anime () {

    const [anime, setAnime] = useState({})

useEffect(()=> {

const getData = async () =>{
  const response = await axios.get()

}

getData()
}, [])



  
    return (
        <div>
            <h2>data goes here</h2>
            
        </div>
    )
}