/* eslint-disable react/prop-types */
const JobList = ({ jobs, setSelectedJob }) => {
  return (
    <div>
      <h2 className="mt-3 mb-4">Job Listing</h2>
      <ul className="list-group">
        {jobs &&
          jobs.map((job) => {
            return (
              <li className="list-group-item" key={job.title}>
                <a
                  href="#"
                  className="text-decoration-none"
                  onClick={() => {
                    setSelectedJob(job);
                  }}
                >
                  {job.title} - {job.company}
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default JobList;
