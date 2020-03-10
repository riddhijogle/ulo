import React, {useState} from 'react'
import { link, Link } from '@reach/router'
// import ReactSelect from 'react-select';
import './toolbar.scss';

 function ResponsiveNavigation({navlinks, background, hoverbackground, linkcolor, logo}){

    const[hoverIndex, setHoverIndex] =useState(-1)
    const[navOpen, setNavOpen] =useState(false)
    console.log(hoverbackground, linkcolor, logo)

        return(
            <nav 
            className="responsive-toolbar"
            style={{background}} >
                <ul 
                style={{background}}
                className={ navOpen ? 'active' : '' }>
                    <figure onClick={ () => setNavOpen(!navOpen)}>
                        <img src={logo} height="40px" width="40px" alt="logo-nav-toggler"/>
                    </figure>
                    {navlinks.map((link, index) =>
                    <li
                    onMouseEnter={ ()=> setHoverIndex(index)}
                    onMouseLeave={ ()=> setHoverIndex(-1)}
                    style={{background: hoverIndex === index ? ( hoverbackground || '#999') : ''}}   
                    >
                        <Link
                        to={link.path}
                        style={{color: linkcolor}}
                        >
                            { link.text }
                            <i class={link.icon} />

                        </Link>
                    </li>
                    )}
                </ul>

            </nav>
        )
    }

export default ResponsiveNavigation