import React, { use, useState } from "react";
import StatCards from "./StatCards";
import ToggleBtns from "./ToggleBtns";
import IssueCard from "./IssueCard";
import Container from "./Container";

const IssueGrid = ({ promiseIssues }) => {
  const [viewFilter, setViewFilter] = useState("All");
  // console.log(viewFilter);

  const listofIssues = use(promiseIssues);
  // console.log(listofIssues);

  const [issueData, setIssueData] = useState(listofIssues);
  // console.log(issueData);

  const issueFiltered =
    viewFilter === "All"
      ? issueData
      : issueData.filter((issue) => issue.status === viewFilter);
  // console.log(issueFiltered);

  return (
    <Container>
      <StatCards issueData={issueData} />
      <ToggleBtns viewFilter={viewFilter} setViewFilter={setViewFilter} />

      {issueFiltered.length > 0 ? (
        <section className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {issueFiltered.map((issue) => (
            <IssueCard
              key={issue.ticketId}
              issue={issue}
              issueData={issueData}
              setIssueData={setIssueData}
            />
          ))}
        </section>
      ) : (
        <div className="flex justify-center items-center gap-4">
          <div className="animate-bounce status status-info"></div>
          <h4 className="text-2xl">No issues found in this category</h4>
        </div>
      )}
    </Container>
  );
};

export default IssueGrid;