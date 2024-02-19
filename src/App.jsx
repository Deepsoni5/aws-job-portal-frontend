import "bootstrap/dist/css/bootstrap.min.css";
import JobForm from "./components/JobForm";
import { useEffect, useState } from "react";
import { getData } from "./services/api";
import JobList from "./components/JobList";
import JobDetail from "./components/JobDetail";

function App() {
  const handleToggleForm = () => {
    setSelectedJob(null);
    setShowForm((prev) => !prev);
  };
  const [showForm, setShowForm] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const getJobsData = async () => {
      const response = await getData();
      setJobs(response);
    };
    getJobsData();
  }, [showForm]);
  return (
    <div className="container mt-5">
      <div className="row">
        {/** Left Part */}
        <div className="col-md-4">
          {/** left part 1st div */}
          <h1 className="mb-4">Job Board</h1>
          <button
            className="btn btn-primary mb-3 fw-bold"
            onClick={handleToggleForm}
          >
            {showForm ? "Hide Job Form" : "Show Job Form"}
          </button>
          {/** left part 2nd div */}
          <div>
            {showForm && <JobForm setShowForm={setShowForm} />}
            {!showForm && (
              <JobList jobs={jobs} setSelectedJob={setSelectedJob} />
            )}
          </div>
        </div>
        {/** Right Part */}
        {selectedJob && (
          <div className="col-md-8">
            <JobDetail job={selectedJob} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
