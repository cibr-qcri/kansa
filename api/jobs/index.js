const cron = require('node-cron');

const computeStats = require('./computeStats');
const deleteInactiveUsers = require('./deleteInactiveUsers');

const runJobs = () => {
  if (process.env.NODE_ENV === 'production') {
    if (process.env.PM2_INSTANCE_ID === '0') {
      deleteInactiveUsers();
    }
  } else {
    computeStats();
    deleteInactiveUsers();
  }
};

const scheduleJobs = () => {
  if (process.env.NODE_ENV === 'production') {
    if (process.env.PM2_INSTANCE_ID === '0') {
      cron.schedule('0 0 * * *', computeStats);
      cron.schedule('0 0 * * *', deleteInactiveUsers);
    }
  } else {
    console.log('Cron jobs are disabled in development mode'.yellow);
  }
};

const initJobs = () => {
  if (process.env.RUN_JOBS_STARTUP === 'true') {
    runJobs();
  }
  scheduleJobs();
};

module.exports = initJobs;
