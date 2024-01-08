import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import "./footer.scss";

export default function Footer({ selectLanguage, language }) {
    return (
        <footer>
            <div className="footerCont">
                <div className="footerContact">
                    <ul className="contactCall">
                        {selectLanguage[language].map((lang)=>{
                            return <li>
                                <h4>{lang.footerCall}</h4>
                            </li>
                        })}
                        <li>
                            <span>+374(91)-30-20-08</span>
                        </li>
                        <li>
                            <span>+374(77)-30-20-08</span>
                        </li>
                    </ul>
                    <ul className="contactSocial">
                        <li>
                            <div>
                                <FaFacebook ></FaFacebook >
                            </div>
                        </li>
                        <li>
                            <div>
                                <FaInstagram></FaInstagram>
                            </div>
                        </li>
                        <li>
                            <div>
                                <FaWhatsapp></FaWhatsapp>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="footerMenu">
                    {selectLanguage[language].map((lang) => {
                        return <ul>
                            <li>
                                <Link to="/">{lang.home}</Link>
                            </li>
                            <li>
                                <Link to="/about">{lang.about}</Link>
                            </li>
                            <li>
                                <Link to="/services">{lang.service}</Link>
                            </li>
                            <li>
                                <Link to="/portfolio">{lang.portfolio}</Link>
                            </li>
                            <li>
                                <Link to="/team">{lang.team}</Link>
                            </li>
                            <li>
                                <Link to="/contact">{lang.contact}</Link>
                            </li>
                        </ul>
                    })}
                </div>
                <div className="location">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3049.151750201895!2d44.511220167955145!3d40.16117490033593!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abc68e8b3401f%3A0x634a3436729deffc!2zMDAwNSwgNDIg1Y_Vq9Wj1oDVodW2INWE1aXVrtWrINW61bjVstW41b_VoSwg1LXWgNaH1aHVtiAwMDA1!5e0!3m2!1shy!2sam!4v1704480726028!5m2!1shy!2sam" style={{width: "600", height: "450", border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </footer>
    )
}