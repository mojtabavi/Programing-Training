const jobs = [{
    id: 1,
    isActive: true
  },
  {
    id: 2,
    isActive: false
  },
  {
    id: 3,
    isActive: true
  }
];

// actual way
// const activeJobs = jobs.filter(function (job) {
//   return job.isActive;
// });

// arrow function way

const activeJobs = jobs.filter(job => job.isActive);