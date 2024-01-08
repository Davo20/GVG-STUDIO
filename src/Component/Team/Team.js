import React from "react";
import HomeTeam from "./HomeTeam";
import Footer from "../Footer/Footer"
import "./team.scss";
import teamPic from "../../img/2.jpg"

export default function Team({ selectLanguage, language }) {

    return (
        <div>
            <section className="team" style={{ paddingBottom: 60 }}>
                <div className="teamHeader" style={{ paddingTop: 70 }}>
                    {selectLanguage[language].map((lang) => {
                        return <h2>{lang.ourTeam}</h2>
                    })}
                </div>
                <HomeTeam></HomeTeam>
            </section>
            <Footer selectLanguage={selectLanguage} language={language}></Footer>
        </div>
    )
}