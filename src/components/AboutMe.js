import React, { useState } from 'react';
import '../styles/AboutMe.css';
import { FaGithub, FaInstagram, FaTelegramPlane, FaPhoneAlt } from 'react-icons/fa';
import image from '../assets/image.png'; // Replace with your image path

const texts = {
  uz: {
    name: "Salom, men Dilmurodov Diyorbek",
    role: "Frontend Dasturchi",
    desc: "Men 7-sinf o‘quvchisiman. Hozirda HTML, CSS, UI dizayn, JavaScript va React bilan ishlayman. Vaqtimni frontend o‘rganishga va o'zim ustimda ishlashga bag‘ishlayman.",
  },
  ру: {
    name: "Привет, я Дильмуродов Дийёрбек",
    role: "Фронтенд Разработчик",
    desc: "Я ученик 7 класса. Сейчас работаю с HTML, CSS, UI-дизайном, JavaScript и React. Посвящаю время изучению фронтенда и саморазвитию.",
  },
  eng: {
    name: "Hello, I'm Dilmurodov Diyorbek",
    role: "Frontend Developer",
    desc: "I am a 7th-grade student. Currently, I work with HTML, CSS, UI design, JavaScript, and React. I dedicate my time to learning frontend and improving myself.",
  },
};

const AboutMe = () => {
  const [lang, setLang] = useState('uz');

  return (
    <div className="about-container">
      {/* Language Switcher */}
      <div className="lang-switcher">
        <button onClick={() => setLang('uz')} className={lang === 'uz' ? 'active' : ''}>UZB</button>
        <button onClick={() => setLang('ру')} className={lang === 'ру' ? 'active' : ''}>РУС</button>
        <button onClick={() => setLang('eng')} className={lang === 'eng' ? 'active' : ''}>ENG</button>
      </div>

      <div className="profile-img-wrapper">
        <img
          alt="Dilmurodov Diyorbek"
          className="profile-img"
          srcSet={image}
        />
      </div>
      <h1>{texts[lang].name}</h1>
      <p className="role">{texts[lang].role}</p>
      <p className="desc">{texts[lang].desc}</p>

      <div className="links">
        <a href="https://github.com/DilmurodvD" target="_blank" rel="noreferrer">
          <FaGithub className="icon" /> GitHub
        </a>
        <a href="https://www.instagram.com/dilmurodov.dev/" target="_blank" rel="noreferrer">
          <FaInstagram className="icon" /> Instagram
        </a>
        <a href="https://t.me/di_lmurodoff" target="_blank" rel="noreferrer">
          <FaTelegramPlane className="icon" /> Telegram
        </a>
        <a href="tel:+998772152223">
          <FaPhoneAlt className="icon" /> +998 77 215 22 23
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
