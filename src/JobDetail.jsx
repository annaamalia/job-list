import React, { useState, useEffect } from 'react';

const JobDetail = () => {
 const [jobDetail, setJobDetail] = useState(null);

 useEffect(() => {
    // Fetch job detail data from API
    fetch('/api/job-detail')
      .then((response) => response.json())
      .then((data) => setJobDetail(data));
 }, []);

 if (!jobDetail) {
    return <div>Loading...</div>;
 }

 return (
    <div>
      <h1>{jobDetail.title}</h1>
      <h2>{jobDetail.company}</h2>
      <p>{jobDetail.location}</p>
      <div>{jobDetail.description}</div>
    </div>
 );
};

export default JobDetail;