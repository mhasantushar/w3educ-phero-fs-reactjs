import React from "react";

const IssueCard = ({ issue, issueData, setIssueData }) => {
  // console.log(issue);

  const handleIssueStatusUpdate = (issueId, newStatus) => {
    // console.log({ issueId, newStatus });
    const updatedIssueData = issueData.map((issue) =>
      issue.ticketId === issueId ? { ...issue, status: newStatus } : issue
    );
    // console.log(updatedIssueData);
    setIssueData(updatedIssueData);
  };

  return (
    <article className="bg-slate-200 p-8 rounded-xl">
      <div className="flex flex-wrap justify-between items-start gap-6 mb-4">
        <img
          width={80}
          height={80}
          className="mask mask-circle"
          src={issue.userImg}
          alt={issue.requestedBy}
        />
        <div className="flex flex-col items-end gap-3">
          <div className="flex flex-wrap justify-end items-center gap-2">
            <div
              className={`font-semibold text-lg badge
              ${issue.priority === "High" && "badge-error"}
              ${issue.priority === "Medium" && "badge-warning"}
              ${issue.priority === "Low" && "badge-info"}
              `}
            >
              {issue.priority}
            </div>
            <div
              className={`font-semibold text-lg badge badge-soft badge-error
              ${issue.status === "Pending" && "badge-error"}
              ${issue.status === "Submitted" && "badge-warning"}
              ${issue.status === "Reviewed" && "badge-success"}
              `}
            >
              {issue.status}
            </div>
          </div>
          <div>
            <h4 className="font-medium text-slate-800 text-lg text-right">
              {issue.requestedBy}
            </h4>
            <p className="text-slate-800 text-xs text-right italic">
              {issue.createdAt}
            </p>
          </div>
        </div>
      </div>
      <h2 className="mb-2 font-bold text-2xl">{issue.subject}</h2>
      <p className="mb-6">{issue.description}</p>

      <div className="flex flex-wrap items-center gap-2 mb-4">
        <button
          onClick={() => handleIssueStatusUpdate(issue.ticketId, "Reviewed")}
          className="btn btn-soft btn-success"
        >
          Reviewed
        </button>
        <button
          onClick={() => handleIssueStatusUpdate(issue.ticketId, "Pending")}
          className="btn btn-soft btn-error"
        >
          Pending
        </button>
      </div>
      <h4>Assignee: {issue.assignedTo}</h4>
    </article>
  );
};

export default IssueCard;