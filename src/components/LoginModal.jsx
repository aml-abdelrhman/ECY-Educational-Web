// src/LoginModal.jsx
import React, { useState, forwardRef, useImperativeHandle } from "react";

const LoginModal = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  // نجعل الفانكشن متاحة للاستدعاء من بره
  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false)
  }));

  if (!isOpen) return null;

  return (
    <div  className="loginModal">
      <h2>Log in</h2>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <div style={{ marginTop: "10px" }}>
       <button 
         onClick={() => alert("تم تسجيل الدخول!")} 
          style={{ marginBottom: "20px" }}
         > Log in</button>
        <button onClick={() => setIsOpen(false)} style={{ marginLeft: "10px" }}>close</button>
      </div>
    </div>
  );
});

export default LoginModal;
;

