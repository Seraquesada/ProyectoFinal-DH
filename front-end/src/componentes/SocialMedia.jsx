import React from 'react'
import {FaFacebook,FaLinkedinIn,FaInstagram,FaTwitter} from 'react-icons/fa'
export default function SocialMedia() {
  return (
    <div >
        <span className='fab '><FaFacebook/></span>
        <span className='fab '><FaLinkedinIn/></span>
        <span className='fab '><FaInstagram/></span>
        <span className='fab '><FaTwitter/></span>
        </div>
  )
}
