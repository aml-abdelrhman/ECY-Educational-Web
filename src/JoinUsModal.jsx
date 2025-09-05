import React, { useState } from "react";

export default function JoinUsModal({ open, setOpen, onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  if (!open) return null; // لن يظهر إلا إذا كانت open = true

  const validateEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const submit = async (ev) => {
    ev.preventDefault();
    setStatus(null);
    if (!validateEmail(email)) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      if (onSubmit) await onSubmit({ name, email });
      else await new Promise((r) => setTimeout(r, 600));
      setStatus("success");
      setName(""); setEmail("");
      setTimeout(() => setOpen(false), 900);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <button className="close" onClick={() => setOpen(false)}>✕</button>
        <h3>سجل لتصلك أحدث الدورات</h3>
        <form onSubmit={submit}>
          <input type="text" placeholder="الاسم (اختياري)" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="البريد الإلكتروني" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <div className="modal-actions">
            <button type="button" onClick={() => setOpen(false)}>إلغاء</button>
            <button type="submit" className="primary">{status === "loading" ? "جارٍ..." : "انضم"}</button>
          </div>
          <div className="modal-status">
            {status==="success" && <p className="success">تم التسجيل</p>}
            {status==="error" && <p className="error">تحقق من البريد وحاول مجددًا</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
