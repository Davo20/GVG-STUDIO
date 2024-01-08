import React from "react";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import "./contact.scss";

export default function Contact({ selectLanguage, language }) {
    return (
            selectLanguage[language].map((lang) => {
                return <div className="contactCont">
                    <div className="addres">
                        <div className="addresCont">
                            <div>
                                <BsTelephone></BsTelephone>
                            </div>
                            <ul>
                                <li>
                                    <h2>{lang.mobileNumber}</h2>
                                </li>
                                <li>+374(91)-30-20-08</li>
                                <li>+374(77)-30-20-08</li>
                            </ul>
                        </div>
                        <div className="addresCont">
                            <div>
                                <MdOutlineEmail></MdOutlineEmail>
                            </div>
                            <ul>
                                <li>
                                    <h2>{lang.emailAddres}</h2>
                                </li>
                                <li>gvg_studio@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="message">
                        <form>
                            <input type="text" name="Name" required placeholder={lang.contactName}></input>
                            <input type="email" name="email" required placeholder={lang.contactEmail}></input>
                            <input type="tel" name="phone" required placeholder={lang.contactMobileNumber}></input>
                            <textarea placeholder={lang.contactMessage}></textarea>
                            <button type="submit">{lang.sendMessage}</button>
                        </form>
                    </div>
                </div>
            })
        // </section>
    )
}