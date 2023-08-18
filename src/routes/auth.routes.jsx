import { Routes, Route } from 'react-router-dom'

import { SignIn } from '../pages/Signin/index.jsx'
import { SignUp } from '../pages/Signup/index.jsx'

export function AuthRoutes(){
    return(
        <Routes>
            <Route path='/' element={<SignIn/>}/>
            <Route path='/register' element={<SignUp/>}/>
        </Routes>
    )
}

