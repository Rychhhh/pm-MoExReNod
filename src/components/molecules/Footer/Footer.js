import React from 'react'
import { ICfacebook, ICinstagram, ICgithub } from '../../../assets/export_image';
import './footer_comp.scss'

const Icon = ({test}) => {
    return (
            <img src={test} alt="logo" />
    )
}

const Header = () => {
  return (
    <div className="footer">

        <div className="top">
            <div className="logo-app">
            <h3>ProMan</h3>
            </div>
            
            <div className="action"> 
                <Icon className="icon" test={ICfacebook} />
                <Icon className="icon" test={ICinstagram} />
                <Icon className="icon" test={ICgithub} />
            </div>
        </div>

        <div className="copyright">
            Copyright @2022
        </div>


    </div>
  )
}

export default Header;