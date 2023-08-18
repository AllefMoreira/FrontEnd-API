import { Routes, Route } from 'react-router-dom'

import { Details } from '../pages/Details/Index.jsx'
import { Home } from '../pages/Home/Index.jsx'
import { New } from '../pages/New/index.jsx'
import { Profile } from '../pages/Profile/index.jsx'

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/details/:id' element={<Details/>}/>
            <Route path='/new' element={<New/>}/>
            <Route path='/profile' element={<Profile/>}/>
        </Routes>
    )
}

