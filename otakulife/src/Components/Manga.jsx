import { useState, useEffect } from "react"
import axios from "axios"

export default function Manga () {

    const [manga, setManga] = useState({})

useEffect(()=> {

const getData = async () =>{
    const response = await axios.get('https://api.jikan.moe/v4/manga')
    console.log(response.data)
    setManga(response.data)
    }
    
    getData()
    }, [])
    
    console.log(manga)
    
      if (!manga) {
        return <h2> Loading Please Wait</h2>
      } else {
    
        return (
            <div>
                <h2>title: {manga.title}</h2>
                <h4>chapters: {manga.chapters}</h4>
            </div>
        )
        }}