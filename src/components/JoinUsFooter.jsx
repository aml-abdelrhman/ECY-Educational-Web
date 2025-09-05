import React, { useState } from "react";

export default function JoinUsFooter({ placeholder = "أدخل بريدك للاشتراك", onSubmit }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const validate = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const submit = async (ev) => {
    ev.preventDefault();
    if (!validate(email)) {
      setStatus("error"); return;
    }
    setStatus("loading");
    try {
      if (onSubmit) await onSubmit({ email });
      else await new Promise(r=>setTimeout(r,600));
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="footer-join" role="region" aria-label="Footer join">
      <form onSubmit={submit} className="footer-form">
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder={placeholder} required />
        <button type="submit" disabled={status==="loading"}>{status==="loading" ? "..." : "اشتراك"}</button>
      </form>
      <div className="footer-status" aria-live="polite">
        {status==="success" && <small className="success">شكرًا! تم الاشتراك.</small>}
        {status==="error" && <small className="error">أدخل بريدًا صالحًا</small>}
      </div>
    </div>
  );
}
