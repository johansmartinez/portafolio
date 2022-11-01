import React from 'react';
import { useState } from 'react';
import './nav.css';

import {useResolution} from '../../customhooks/useResolution';

function Nav() {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu close")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
            setTimeout(() => {
                setMenuClass("menu close")
            }, 400);
        }
        setIsMenuClicked(!isMenuClicked)
    }

    const links=[
        {name:'Acerca de', url:'#about'},
        {name:'Habilidades', url:'#skills'},
        {name:'Contacto', url:'#contact'},
    ];

    let resolution=useResolution();
    
    
    return (
        <div>
            <nav id='nav'>
                {
                    resolution==='MOBILE'&&
                        <div className="burger-menu" onClick={updateMenu}>
                            <div className={burger_class} ></div>
                            <div className={burger_class} ></div>
                            <div className={burger_class} ></div>
                        </div>
                }
                
                <a href='#nav'>
                    <span><span className='bold'>JM</span>.dev</span>
                </a>
                {
                    resolution==='DESKTOP'&&
                    <ul>
                        {
                            links.map((e,i)=>(
                                <li key={`dl-${i}`}><a className={`nav-link`} href={e.url}> {e.name} </a></li>
                            ))
                        }
                        
                    </ul>
                }
                {
                    resolution==='MOBILE'&&
                    <span></span>
                }

            </nav>
            {
                    resolution==='MOBILE'&&
                        <div className={menu_class}>
                            <ul>
                                {
                                    links.map((e,i)=>(
                                        <li className='toggle-menu-li' key={`ml-${i}`}><a className={`toggle-menu-link`} href={e.url}> {e.name} </a></li>
                                    ))
                                }
                                
                            </ul>
                        </div>
            }
        </div>
    );
}

export {Nav};