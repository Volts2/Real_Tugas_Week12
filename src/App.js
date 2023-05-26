import React, { useState } from "react";
import "./styles.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submittedFirstName, setSubmittedFirstName] = useState("");
  const [submittedLastName, setSubmittedLastName] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [reloadClicked, setReloadClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedFirstName(firstName);
    setSubmittedLastName(lastName);
    setSubmittedEmail(email);
    setSubmitted(true);
  };

  const handleReloadClick = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        {submitted ? (
          <div>
            <h1>
              Hello {submittedFirstName} {submittedLastName}
            </h1>
            <p>{submittedEmail}</p>
            {!reloadClicked ? (
              <button type="button" onClick={() => setReloadClicked(true)}>
                Reload
              </button>
            ) : (
              <button type="button" onClick={handleReloadClick}>
                Reload
              </button>
            )}
          </div>
        ) : (
          <>
            <input
              className="input"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
            <br />
            <input
              className="input"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />
            <br />
            <input
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <br />
            <button type="submit">Submit</button>
          </>
        )}
      </form>
    </div>
  );
}

export default App;
