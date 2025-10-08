import React, { useRef } from "react";

const UncontrolledField = () => {
  const mailRef = useRef("");
  const passRef = useRef("");

  const handleFormSubit = (e) => {
    e.preventDefault();
    // console.log(mailRef.current.value);
    const email = mailRef.current.value;
    const passw = passRef.current.value;
    console.log(email, passw);
  };

  return (
    <div>
      <h3>Uncontrolled Field</h3>

      <form onSubmit={handleFormSubit}>
        <input type="email" ref={mailRef} name="fmail" placeholder="Email" />
        <br />
        <input
          type="password"
          ref={passRef}
          name="fpass"
          placeholder="Password"
        />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UncontrolledField;
