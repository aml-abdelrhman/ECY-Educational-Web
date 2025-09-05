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

  // حالة المودال في Footer (Get Quote)
  const [activeFooterSection, setActiveFooterSection] = useState("");

  // دالة لفتح مودال الاتصال في Footer
  const openFooterModal = (section) => setActiveFooterSection(section);

  return (
    <div>
      {/* Header مع مودال تسجيل الدخول */}
      <Header loginRef={loginRef} />
      <LoginModal ref={loginRef} />

      {/* الصفحة الرئيسية */}
      <Home openModal={openFooterModal} />

      {/* باقي الأقسام */}
      <Courses />
      <ServicesSlider/>
      <Reviews />
      <JoinUsSimple />

      {/* Footer + مودال الاتصال */}
      <LastFooter 
        activeSection={activeFooterSection} 
        setActiveSection={setActiveFooterSection} 
      />
    </div>
  );
}
