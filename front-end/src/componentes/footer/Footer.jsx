import React from 'react';
import './Footer.css'
import {BsFacebook,BsTwitter,BsInstagram} from 'react-icons/bs'
import {GrLinkedinOption} from 'react-icons/gr'


const Footer = () => {

    return(
        <footer className="footer text-dark">
                <div className="text">
                    <p className="p-derechos">
                    © 2022 RE-VOLT RENTALS INC
                    </p>
                </div>
                <div className="logos">
                    <BsFacebook/>
                    <GrLinkedinOption/>
                    <BsTwitter/>
                    <BsInstagram/>
                </div>
        </footer>
    )
}

export default Footer;