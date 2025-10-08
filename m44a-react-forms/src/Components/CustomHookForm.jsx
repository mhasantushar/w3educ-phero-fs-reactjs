import React from "react";
import useInputField from "../Hooks/useInputField";

const CustomHookForm = () => {
  const [name, handleNameOnChange] = useInputField("");
  const [email, handleEmailOnChange] = useInputField("");
  const [password, handlePasswordOnChange] = useInputField("");

  const handleFormOnSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  return (
    <div>
      <h3>Custom Hook Form</h3>

      <form onSubmit={handleFormOnSubmit}>
        <input
          type="text"
          name="fname"
          placeholder="Name"
          defaultValue={name}
          onChange={handleNameOnChange}
        />
        <br />
        <input
          type="email"
          name="fmail"
          placeholder="Email"
          defaultValue={email}
          onChange={handleEmailOnChange}
        />
        <br />
        <input
          type="password"
          name="fpass"
          placeholder="Password"
          defaultValue={password}
          onChange={handlePasswordOnChange}
        />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CustomHookForm;
