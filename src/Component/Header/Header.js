import React, { useRef } from "react";
import pic from "../../img/headerPic.jpg";
import "./header.scss"

export default function Header({ selectLanguage, language }) {
    return (
        <header>
            <div className="headerCont">
                {/* <img src={pic}></img> */}
                {selectLanguage[language].map((lang) => {
                    return <div>
                        <h2>{lang.expert}</h2>
                        <p>{lang.headinng}</p>
                    </div>
                })}
            </div>
        </header>
    )
}
