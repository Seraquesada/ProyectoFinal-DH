import React from 'react';
import './Footer.css'
import {BsFacebook,BsTwitter,BsInstagram} from 'react-icons/bs'
import {GrLinkedinOption} from 'react-icons/gr'

const Footer = () => {
    return(
        <footer className="footer">
                <div className="text">
                    <p className="p-derechos">
                    © 2022 RE-VOLT RENTALS INC
                    </p>
                </div>
                <div className="logos">
                    <span><BsFacebook/></span>
                    <span><GrLinkedinOption/></span>
                    <span><BsTwitter/></span>
                    <span><BsInstagram/></span>
                </div>
        </footer>
    )
}

export default Footer;