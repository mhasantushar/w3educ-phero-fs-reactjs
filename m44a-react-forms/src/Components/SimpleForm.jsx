import React from "react";

const SimpleForm = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.fName.value);
    console.log(e.target.fMail.value);
  };

  return (
    <div>
      <h3>On Change Form</h3>

      <form onSubmit={handleSubmit}>
        <input type="text" name="fName" placeholder="Your Name" />
        <br />
        <input type="text" name="fMail" placeholder="Your Email" />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
