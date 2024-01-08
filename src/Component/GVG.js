import React, { useState } from "react";
import Nav from "./Nav/Nav"
import Header from "./Header/Header";
import Home from "./Home"
import About from "./About/About";
import Services from "./Service/Services"
import Portfolio from "./Portfolio/Portfolio";
import Team from "./Team/Team";
import Contact from "./Contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./home.scss"

export default function GVG() {
    const [language, setLanguage] = useState("English")

    // const languageClick = (e) => {
    //     setLanguage(e.target.value)
    //     // console.log(e.target.options)
    // }
    const languageClick = (value) => {
        setLanguage(value) // { value: "lucy", key: "lucy", label: "Lucy (101)" }
      };
      console.log(language)
    const selectLanguage = {
        English: [
            {
                headinng: "Quality Videography Services",
                expert: "10 Years Expert",
                home: "Home",
                about: "About",
                aboutUs: "About Us",
                service: "Services",
                ourService: "Our Service",
                portfolio: "Portfolio",
                team: "Team",
                ourTeam: "Our Team",
                contact: "Contact",
                contactAbout: "If you have any questions, please contact our support team",
                imigayin: "Imigayin",
                informative: "Informative",
                playful: "Playful",
                animated: "Animated-2D, 3D",
                shotingVideos: "Shooting and making videos",
                visualizationOfStartups: "Visualization of startups",
                reparationOfWebsites: "Preparation of websites",
                corporateEvents: "Corporate events, concerts, programs, film shooting and making",
                mobileNumber: "Mobile Number",
                emailAddres: "Email Addres",
                contactName: "Your Name",
                contactEmail: "Your Email",
                contactMobileNumber: "Your Mobile Number",
                contactMessage: "Message",
                sendMessage: "Send",
                footerCall: "Call for questions"
            }
        ],
        Armenian: [
            {
                headinng: "Որակյալ տեսանկարահանման ծառայություններ",
                expert: "10 տարվա փորձ",
                home: "Գլխավոր",
                about: "Մասին",
                aboutUs: "Մեր մասին",
                service: "Ծառայություններ",
                ourService: "Մեր ծառայությունները",
                portfolio: "Պորտֆոլիո",
                team: "Թիմ",
                ourTeam: "Մեր թիմը",
                contact: "Կապ",
                contactAbout: "Եթե ունեք հարցեր, դիմեք մեր աջակցության թիմին",
                imigayin: "Իմիջային",
                informative: "Ինֆորմացիոն",
                playful: "Խաղարկային",
                animated: "Անիմացիոն-2D, 3D",
                shotingVideos: "Տեսահոլովակների նկարահանում և նպատրաստում",
                visualizationOfStartups: "Ստարտափերի վիզուալիզացում",
                reparationOfWebsites: "Կայքերի պատրաստում",
                corporateEvents: "Կորպորատիվ միջոցառումների, համերգների, հաղորդումների, ֆիլմերի նկարահանում և պատրաստում",
                mobileNumber: "Հեռախոսահամար",
                emailAddres: "Էլ․ Հասցե",
                contactName: "Ձեր անունը",
                contactEmail: "Ձեր էլ․ հասցեն",
                contactMobileNumber: "Ձեր հեռախոսահամարը",
                contactMessage: "Հաղորդագրություն",
                sendMessage: "Ուղարկել",
                footerCall: "Հարցերի համար զանգահարել"
            }
        ],
        Russian: [
            {
                headinng: "Качественные услуги видеосъемки",
                expert: "10-летний эксперт",
                home: "Главный",
                about: "Онас",
                aboutUs: "О нас",
                service: "Услуги",
                ourService: "Наши сервисы",
                portfolio: "Портфолио",
                team: "Команда",
                ourTeam: "Наша команда",
                contact: "Контакт",
                contactAbout: "Если у вас есть какие-либо вопросы, пожалуйста, свяжитесь с нашей службой поддержки",
                imigayin: "Имигайин",
                informative: "Информационный",
                playful: "Игривый",
                animated: "Анимированные-2D, 3D",
                shotingVideos: "Съемки и производство видеоклипов",
                visualizationOfStartups: "Визуализация стартапов",
                reparationOfWebsites: "Подготовка сайтов",
                corporateEvents: "Корпоративные мероприятия, концерты, программы, фильмов снимаю и делаю",
                mobileNumber: "Номер мобильного телефона",
                emailAddres: "Адрес эл. почты",
                contactName: "Ваше имя",
                contactEmail: "Ваш адрес эл․ почты адрес",
                contactMobileNumber: "Ваш номер телефона",
                contactMessage: "Сообщение",
                sendMessage: "Отправлять",
                footerCall: "Звоните по вопросам"
            }
        ]
    }
    return (
        <main>
            <BrowserRouter>
                <Nav languageClick={languageClick} language={language} selectLanguage={selectLanguage}></Nav>
                <Routes>
                    <Route path="/" element={<Home selectLanguage={selectLanguage} language={language}></Home>}></Route>
                    <Route path="about" element={<About selectLanguage={selectLanguage} language={language}></About>}></Route>
                    <Route path="services" element={<Services selectLanguage={selectLanguage} language={language}></Services>}></Route>
                    <Route path="portfolio" element={<Portfolio selectLanguage={selectLanguage} language={language}></Portfolio>}></Route>
                    <Route path="team" element={<Team selectLanguage={selectLanguage} language={language}></Team>}></Route>
                    <Route path="contact" element={<Contact selectLanguage={selectLanguage} language={language}></Contact>}></Route>
                </Routes>
            </BrowserRouter>
        </main>
    )
}