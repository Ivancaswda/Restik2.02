import React  from "react";
import './Footer.css'
import {assets} from "../../assets/assets.js";
import {Link} from "react-router-dom";

const Footer = () => {
    return (

        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <div className='logo-div-cafe'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-truck" viewBox="0 0 16 16">
                            <path
                                d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                        </svg>
                        <h1 style={{color: 'white'}}>Vaz<span>on</span></h1>
                    </div>
                    <p id='footer-copyright'>Ваша любовь к нашему кафе вдохновляет нас на новые кулинарные идеи и сервис.
                        Присоединяйтесь к нашему сообществу в соцсетях и будьте в курсе всех новинок и акций!
                    </p>
        <div style={{gap: '20px', display: 'flex'}}>
                        <img src={assets.facebook_icon} alt=""/>
                        <img src={assets.twitter_icon} alt=""/>
                        <img src={assets.linkedin_icon} alt=""/>
        </div>
                </div>
                <div className="footer-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>

                        <li>Delivery</li>
                        <Link rel="noopener noreferrer" target='_blank' to='https://indentity.netlify.app/'><li>About</li></Link>
                        <li>Privacy Policy</li>
                    </ul>

                </div>
                <div className="footer-content-right">
                    <h2>Связаться с нами</h2>
                    <ul>
                        <li>+7-952-163-71-69</li>
                        <li>katkovskiji@gmail.com</li>
                    </ul>


                </div>
            </div>
            <hr/>
            <p className='footer-copyright'>Copyright &copy; 2025 Vazon made by <b>Ivan Katkovsky</b></p>


        </div>
    )
}

export default Footer