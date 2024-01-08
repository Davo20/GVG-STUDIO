import React from "react";
import HomeAbout from "./HomeAbout";
import Footer from "../Footer/Footer"
import aboutPic from "../../img/about.jpg";
import "./about.scss";

export default function About({ selectLanguage, language }) {
    return (
        <div>
        <section className="aboutUs" style={{paddingBottom: 60}}>
            <div className="aboutHeader" style={{paddingTop: 70}}>
                {selectLanguage[language].map((lang) => {
                    return <h2>{lang.aboutUs}</h2>
                })}
            </div>
            {selectLanguage[language].map((lang) => {
                    return <h2 data-aos="zoom-out">{lang.aboutUs}</h2>
            })}
            <HomeAbout></HomeAbout>
        </section>
        <Footer selectLanguage={selectLanguage} language={language}></Footer>
        </div>
    )
}