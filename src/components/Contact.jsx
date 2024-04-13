import React from "react";
import { useState } from "react";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = { email, feedback, timestamp: Date.now() };
    console.log(formData);
  };
  return (
    <div className="container p-5">
      <section>
        <h3>Lépj velünk kapcsolatba</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Üzenet:</label>
            <textarea
              className="form-control"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows="3"
            ></textarea>
          </div>
          <button className="btn btn-primary">Küldés</button>
        </form>
      </section>
    </div>
  );
};


