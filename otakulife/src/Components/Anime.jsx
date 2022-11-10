import { useState, useEffect } from "react"
import axios from "axios"

export default function Anime () {

    const [anime, setAnime] = useState({})

useEffect(()=> {

const getData = async () =>{
  const response = await axios.get('https://api.jikan.moe/v4/anime/1')
console.log(response.data)
setAnime(response.data)
}

getData()
}, [])

console.log(anime)

  if (!anime) {
    return <h2> Loading Please Wait</h2>
  } else {

    return (
        <div>
            <h2>title: {anime.title}</h2>
            <h4>trailer: {anime.trailer}</h4>
        </div>
    )
    }}