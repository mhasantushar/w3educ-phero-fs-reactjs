import React from "react";

const StatCards = ({ issueData }) => {
  // console.log(issueData);

  const issuePending = issueData.filter((issue) => issue.status === "Pending");
  const issueSubmitted = issueData.filter(
    (issue) => issue.status === "Submitted"
  );
  const issueReviewed = issueData.filter(
    (issue) => issue.status === "Reviewed"
  );
  // console.log ({issuePending, issueSubmitted, issueReviewed});

  return (
    <section className="justify-between items-center gap-6 grid grid-cols-3">
      <div className="bg-amber-800 p-12 rounded-xl text-white text-center">
        <h2 className="mb-6 font-bold text-4xl">Pending</h2>
        <h3 className="font-bold text-6xl">{issuePending.length}</h3>
      </div>

      <div className="bg-stone-800 p-12 rounded-xl text-white text-center">
        <h2 className="mb-6 font-bold text-4xl">Submitted</h2>
        <h3 className="font-bold text-6xl">{issueSubmitted.length}</h3>
      </div>

      <div className="bg-lime-800 p-12 rounded-xl text-white text-center">
        <h2 className="mb-6 font-bold text-4xl">Reviewed</h2>
        <h3 className="font-bold text-6xl">{issueReviewed.length}</h3>
      </div>
    </section>
  );
};

export default StatCards;