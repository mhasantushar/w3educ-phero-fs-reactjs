import React from "react";
import { useState } from "react";

const ControlledField = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  const handleNameOnChange = (e) => {
    // console.log(e.target.value);
    setName(e.target.value);
    if (name.split(" ").length < 2)
      setError("You should have first and last names at the least");
    else setError("");
  };

  const handleEmailOnChange = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePasswordOnChange = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);

    if (password.length < 6) setError("Password must be longer than 6 char");
    else setError("");
  };

  return (
    <div>
      <h3>Controlled Field</h3>

      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="fname"
          placeholder="Name"
          defaultValue={name}
          onChange={handleNameOnChange}
          required
        />
        <br />
        <input
          type="email"
          name="fmail"
          placeholder="Email"
          defaultValue={email}
          onChange={handleEmailOnChange}
          required
        />
        <br />
        <input
          type="password"
          name="fpass"
          placeholder="password"
          defaultValue={password}
          onChange={handlePasswordOnChange}
          required
        />
        <br />

        <input type="submit" value="Submit" />
      </form>

      <section style={{ color: "red" }}>
        <small>
          <p>{error}</p>
        </small>
      </section>
    </div>
  );
};

export default ControlledField;
