import {Home} from '../Pages/Home'
import {History} from '../Pages/History'
import {Contacts} from '../Pages/Contacts'
import {Registration} from '../Pages/Registration'
import {Login} from '../Pages/Login'
import {Profile} from '../Pages/Profile'
import { DronPage } from "../Pages/DronPage";
import { Route, Routes } from "react-router-dom"


export function AppRouter() {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/history" element={<History/>}/>
            <Route exact path="/contacts" element={<Contacts/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/registration" element={<Registration/>}/>
            <Route exact path="/profile" element={<Profile/>}/>
            <Route exact path="/card/:id" element={<DronPage/>}/>
        </Routes>
    );
}