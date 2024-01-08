import React from "react";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import HomeContact from "./HomeContact";
import Footer from "../Footer/Footer"
import "./contact.scss";

export default function Contact({ selectLanguage, language }) {
    return (
        <div>
            <section className="contact" style={{ paddingBottom: 60 }}>
                <div className="contactHeader" style={{ paddingTop: 70 }}>
                    {selectLanguage[language].map((lang) => {
                        return <h2>{lang.contact}</h2>
                    })}
                </div>
                {selectLanguage[language].map((lang) => {
                        return <div>
                            <h2>{lang.contact}</h2>
                            <p>{lang.contactAbout}</p>
                        </div>
                    })}
                <HomeContact selectLanguage={selectLanguage} language={language}></HomeContact>
            </section>
            <Footer selectLanguage={selectLanguage} language={language}></Footer>
        </div>
    )
}