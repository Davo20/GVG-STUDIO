import React, { useState } from "react";
import HomePortfolio from "./HomePortfolio";
import Footer from "../Footer/Footer"
import "./portfolio.scss";

export default function Portfolio({ selectLanguage, language }) {
    // const [array, setArr] = useState([...new Array(9).fill(9)])
    // console.log(array)
    return (
        <div>
            <section className="portfolio" style={{ paddingBottom: 60 }}>
                <div className="portfolioHeader" style={{ paddingTop: 70 }}>
                    {selectLanguage[language].map((lang) => {
                        return <h2>{lang.portfolio}</h2>
                    })}
                </div>
                <HomePortfolio></HomePortfolio>
            </section>
            <Footer selectLanguage={selectLanguage} language={language}></Footer>
        </div>
    )
}