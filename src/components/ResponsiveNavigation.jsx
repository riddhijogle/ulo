import React, {useState} from 'react'
import { link, Link } from '@reach/router'
import './assets/scss/base'

 function ResponsiveNavigation({navlinks, background, hoverbackground, linkcolor, logo}){

    const[hoverIndex, setHoverIndex] =useState(-1)
    const[navOpen, setNavOpen] =useState(false)
    console.log(hoverbackground, linkcolor, logo)

        return(
            <nav 
            className="responsive-toolbar"
            style={{background}} >
                <ul style={{background}}>
                    {navlinks.map(link =>
                    <li>
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