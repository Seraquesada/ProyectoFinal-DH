import { VscChromeClose } from "react-icons/vsc";
import React from 'react'
function SideBarHeader() {
    return ( 
        <div className="SideBarHeader">
            <label htmlFor='btn-menu' className="menuAncore">  <VscChromeClose /> </label>
            <h3>MENÚ</h3>
        </div>
     );
}

export default SideBarHeader;