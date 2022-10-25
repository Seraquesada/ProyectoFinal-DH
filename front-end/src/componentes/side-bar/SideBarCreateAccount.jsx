import React from 'react'
import SideBarHeader from './SideBarHeader'
import SocialMedia from '../SocialMedia'
import './SideBar.css'
import { Link } from 'react-router-dom';



export default function SideBarCreateAccount() {
  return (
    < >
        <SideBarHeader/>
        <div className="menuButtons">
        <Link to="/singUp"> Create Account</Link>
        </div>
        <div  className="logosRedes">
        <SocialMedia />
        </div>
    </>
    
  )
}
