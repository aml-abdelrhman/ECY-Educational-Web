// src/App.jsx
import React, { useRef, useState } from 'react';
import Header from './components/Header';
import LoginModal from "./components/LoginModal";
import Home from './components/Home';
import Courses from './components/Courses';
import ServicesSlider from './Slider';
import Reviews from './components/Reviews';
import JoinUsSimple from "./JoinUsSimple";
import LastFooter from './LastFooter';

export default function App() {
  const loginRef = useRef();
  const [activeFooterSection, setActiveFooterSection] = useState("");
  const openFooterModal = (section) => setActiveFooterSection(section);

  return (
    <div>
      <Header loginRef={loginRef} />
      <LoginModal ref={loginRef} />
      <Home openModal={openFooterModal} />
      <Courses />
      <ServicesSlider/>
      <Reviews />
      <JoinUsSimple />
      <LastFooter 
        activeSection={activeFooterSection} 
        setActiveSection={setActiveFooterSection} 
      />
    </div>
  );
}
