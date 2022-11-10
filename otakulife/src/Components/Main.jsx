import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import Anime from './Anime'
import Manga from './Manga'
export default function Main () {
    return (
        <div>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/anime" element={<Anime/>}/>
    <Route path="/manga" element={<Manga/>}/>
</Routes>
</div>
    )
}