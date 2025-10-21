import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleInterestChange = (e) => {
    const value = e.target.value;
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((i) => i !== value) : [...prev, value]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const interestsText =
      interests.length > 0 ? ` Interests: ${interests.join(", ")}.` : "";
    setMessage(
      `Thank you for signing up, ${name}! Your email is ${email}.${interestsText}`
    );
    setSubmitted(true);
  };

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <h2>Newsletter Signup</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={handleNameChange}
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <br />
        <fieldset>
          <legend>Interests:</legend>
          <label>
            <input
              type="checkbox"
              value="Technology"
              checked={interests.includes("Technology")}
              onChange={handleInterestChange}
            />
            Technology
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="Art"
              checked={interests.includes("Art")}
              onChange={handleInterestChange}
            />
            Art
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="Sports"
              checked={interests.includes("Sports")}
              onChange={handleInterestChange}
            />
            Sports
          </label>
        </fieldset>
        <br />
        <button type="submit">Submit</button>
      </form>
      {submitted && <p>{message}</p>}
    </main>
  );
}

export default App;
