import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Jobs } from "./components/Jobs";
import { JobsPagination } from "./components/JobsPagination";
import { SearchForm } from "./components/SearchForm";
import useFetchJobs from "./hooks/useFetchJobs";

export const App = () => {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs(params, page);
  const hasNextPage = true; // Math.floor(Math.random() * 10) % 2 === 0;

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;

    // perform search on the first page
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }
  return (
    <Container className="my-4">
      <h1 className="mb-3">Github Jobs</h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
      {hasNextPage && (
        <JobsPagination
          page={page}
          setPage={setPage}
          hasNextPage={hasNextPage}
        />
      )}

      {loading && <h1>Loading...</h1>}
      {error && <h1>Error, Try Refreshing.</h1>}
      {jobs.map((job) => (
        <Jobs key={job.id} job={job} />
      ))}
    </Container>
  );
};
