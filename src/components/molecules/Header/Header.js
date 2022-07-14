import React from 'react'
import { LogoApp } from '../../../assets/export_image';
import './header_comp.scss'

 const Header = () => {
  return (
    <div className="header">
        <div className="logo-app">
            <img src={LogoApp} className="image" alt="logo" />
        </div>
        
        <div className="action">
          <div className="account">User</div>
          <div className="logout">
              <button className="btn-logout">Log out</button>
          </div>
        </div>
    </div>
  )
}

export default Header;