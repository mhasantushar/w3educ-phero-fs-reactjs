import { Suspense } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import IssueGrid from "./components/IssueGrid";

const fetchIssues = async () => {
  const resp = await fetch("/data.json");
  return resp.json();
};

function App() {
  const promiseIssues = fetchIssues();
  // console.log(promiseIssues);

  return (
    <>
      <Navbar />

      <Suspense
        fallback={
          <div className="flex justify-center item-center">
            <div className="flex justify-center items-center gap-4">
              <div className="animate-bounce status status-info"></div>
              <h4 className="text-2xl">Fetching data, please standby</h4>
            </div>
          </div>
        }
      >
        <IssueGrid promiseIssues={promiseIssues} />;
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
