import React, { useState } from "react";

export default function JoinUsSimple() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("جارٍ إرسال البيانات...");

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      if (response.ok) {
        setMessage("✅ تم التسجيل بنجاح! شكراً لانضمامك إلينا.");
        setName("");
        setEmail("");
      } else {
        setMessage("❌ حدث خطأ أثناء التسجيل. حاول مرة أخرى.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("⚠️ فشل الاتصال بالخادم.");
    }
  };

  return (
    <div className="container-simple">
      <h2 className="title"> Join Us </h2>
      <p className="subtitle">Sign up now to access the latest lessons and courses</p>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="input"
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input"
        />
        <button type="submit" className="button"> Join Now</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}
