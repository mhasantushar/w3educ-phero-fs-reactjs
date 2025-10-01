import React from "react";

const ToggleBtns = ({ viewFilter, setViewFilter }) => {
  const buttons = ["All", "Pending", "Submitted", "Reviewed"];

  return (
    <section className="flex flex-wrap justify-center my-12">
      {buttons.map((btn, index) => {
        // console.log(btn);
        // console.log(index);

        return (
          <button
            key={index}
            onClick={() => setViewFilter(btn)}
            className={`rounded-none min-w-30 btn btn-primary 
              ${viewFilter === btn ? null : "btn-soft"}
              ${index === 0 && "rounded-l-md"}
              ${index === buttons.length - 1 && "rounded-r-md"}
              `}
          >
            {btn}
          </button>
        );
      })}
    </section>

    // <section className="flex flex-wrap justify-end mx-auto my-12 container">
    //   <button
    //     onClick={() => setViewFilter("All")}
    //     className={`border-0 rounded-r-none min-w-30 btn btn-primary ${
    //       viewFilter === "All" ? null : "btn-soft"
    //     }`}
    //   >
    //     All
    //   </button>
    //   <button
    //     onClick={() => setViewFilter("Pending")}
    //     className={`border-0 rounded-none min-w-30 btn btn-primary ${
    //       viewFilter === "Pending" ? null : "btn-soft"
    //     }`}
    //   >
    //     Pending
    //   </button>
    //   <button
    //     onClick={() => setViewFilter("Submitted")}
    //     className={`border-0 rounded-none min-w-30 btn btn-primary ${
    //       viewFilter === "Submitted" ? null : "btn-soft"
    //     }`}
    //   >
    //     Submitted
    //   </button>
    //   <button
    //     onClick={() => setViewFilter("Reviewed")}
    //     className={`border-0 rounded-l-none min-w-30 btn btn-primary ${
    //       viewFilter === "Reviewed" ? null : "btn-soft"
    //     }`}
    //   >
    //     Reviewed
    //   </button>
    // </section>
  );
};

export default ToggleBtns;
