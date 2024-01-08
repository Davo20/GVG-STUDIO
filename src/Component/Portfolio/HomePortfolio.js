import React, { useState } from "react";
import "./portfolio.scss";

export default function Portfolio({ selectLanguage, language }) {
    const [array, setArr] = useState([...new Array(9).fill(9)])
    console.log(array)
    return (
        <div className="aboutCont">
            <div>
                {/* <img src={aboutPic}></img> */}
            </div>
            <div className="portfolioCont">
                {array.map((elem, index) => {
                    return <div data-aos="zoom-out-down" key={index} >{elem}</div>
                })}
            </div>
        </div>
    )
}