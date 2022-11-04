import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import Anime from './Anime'

export default function Main () {
    return (
        <div>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/anime" element={<Anime/>}/>
    
</Routes>

        </div>
    )
}