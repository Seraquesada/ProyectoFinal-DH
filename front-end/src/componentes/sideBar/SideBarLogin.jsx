import React from 'react'

import SideBarHeader from './SideBarHeader'
import './SideBar.css';
import SocialMedia from '../SocialMedia'
import { Link } from 'react-router-dom';

export default function SideBarLogin() {
  return (
    < >
        <SideBarHeader/>
        <div className="menuButtons">
        <Link to="/login"> Log in</Link>
        </div>
        <div  className="logosRedes">
        <SocialMedia />        
        </div>
    </>
  )
}
