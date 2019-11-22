import React from 'react';
import { NavLink } from "react-router-dom";
import eu from '../assets/img/eu.png';
import pl from '../assets/img/pl.png';
import funds from '../assets/img/funds.png';

function Footer(props) {
    return (
        <footer className='footer' style={props.color?{backgroundColor: "black"}:null}>
            <div className="wrapper">
                <div className="upper-footer">
                    <div className="footer-links-container">
                        {props.links.map(el => {
                            return (
                                <NavLink className='footer-links' to={el.link}>{el.text}</NavLink>
                            )
                        })}
                    </div>
                    <div className="social-media">
                        <a href='https://www.facebook.com/dboatspl' rel='noopener noreferrer' target='_blank'
                           className="border-icon">
                            <i className="fab fa-facebook-f facebook"/>
                        </a>
                        <a href='https://www.instagram.com/dboatspl/' rel='noopener noreferrer' target='_blank'
                           className="border-icon">
                            <i className="fab fa-instagram instagram"/>
                        </a>
                        <a href='https://www.youtube.com/channel/UCqHlDEnb4xrb6G0EASOfkBA/videos'
                           rel='noopener noreferrer' target='_blank' className="border-icon">
                            <i className="fab fa-youtube youtube"/>
                        </a>
                    </div>
                </div>
                <div className="div lower-footer">
                    <img className='funds-logo' src={funds} alt="European Funds"/>
                    <img className='pl-logo' src={pl} alt="European Funds"/>
                    <img className='eu-logo' src={eu} alt="European Funds"/>
                </div>
            </div>
        </footer>
    )

}


export default Footer
