import React from "react";

const ActionForm = () => {

  const handleActionForm = (formData) => {
    console.log(formData.get("fMail"));
    console.log(formData.get("fName"));
  };

  return (
    <div>
      <h3>On Action Form</h3>

      <form action={handleActionForm}>
        <input type="text" name="fName" placeholder="Your Name" />
        <br />
        <input type="text" name="fMail" placeholder="Your Email" />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ActionForm;
