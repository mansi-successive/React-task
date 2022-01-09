import React from 'react'
import { NavLink  } from 'react-router-dom';
import HeaderStyle from './style'

const Header = () => {
    return (
        <HeaderStyle>
             <ul>
                <li><NavLink  to="/"> DashBoard</NavLink></li>
                <li><NavLink to="/aboutus"> AboutUs</NavLink></li>
                <li><NavLink  to="/contact"> Contact</NavLink></li>
                
            </ul>  
        </HeaderStyle>
    )
}

export default Header;
