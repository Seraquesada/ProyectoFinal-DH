import React from 'react'
import SideBarHeader from './SideBarHeader'
import SideBarMain from './SideBarMain'
import './SideBar.css'
import SocialMedia from '../SocialMedia'

export default function SideBar() {
    return (
      <div>
        <SideBarHeader />
        <SideBarMain />
        <div className="network-logos">
        <SocialMedia />
        </div>
      </div>
    )
  }
  