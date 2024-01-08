import React, { useState } from "react";
import { Select } from 'antd';
import { Outlet, Link } from "react-router-dom";
import "./nav.scss";

export default function Burger({ navSticky, languageClick, language, selectLanguage, menuBurger }) {
    return (
        <div className={"burgerNavigationBar " + (navSticky && "navStikyBurger")}>
            <div className="navBarMenuBurger">
                {selectLanguage[language].map((lang) => {
                    return <ul>
                        <div className="menuLink">
                            <Link to="/about">
                                <li>{lang.about}</li>
                            </Link>
                        </div>
                        <div className="menuLink">
                            <Link to="/services">
                                <li>{lang.service}</li>
                            </Link>
                        </div>
                        <div className="menuLink">
                            <Link to="/portfolio">
                                <li>{lang.portfolio}</li>
                            </Link>
                        </div>
                        <div className="menuLink">
                            <Link to="/team">
                                <li>{lang.team}</li>
                            </Link>
                        </div>
                        <div className="menuLink">
                            <Link to="/contact">
                                <li>{lang.contact}</li>
                            </Link>
                        </div>
                        <li>
                            <div className="selectLanguage">
                                {/* <select value={language} onChange={languageClick} autoFocus>
                                        <option value="English">EN</option>
                                        <option value="Armenian">AM</option>
                                        <option value="Russian">RU</option>
                                    </select> */}
                                <Select
                                    // labelInValue
                                    defaultValue={{ value: "English", label: "EN" }}
                                    style={{ width: 60, height: 20 }}
                                    listItemHeight={30}
                                    onChange={languageClick}
                                    options={[
                                        {
                                            value: "English",
                                            label: "EN"
                                        },
                                        {
                                            value: "Armenian",
                                            label: "AM"
                                        },
                                        {
                                            value: "Russian",
                                            label: "RU"
                                        },
                                    ]}
                                />
                            </div>
                        </li>
                    </ul>
                })}
            </div>
        </div>
    )
}