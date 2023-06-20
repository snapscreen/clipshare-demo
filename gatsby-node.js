// gatsby-node.js
const childProcess = require('child_process');
const path = require('path');

exports.onPostBuild = () => {
  const apiProcess = childProcess.spawn(
    'node',
    [path.join(__dirname, 'functions', 'api.mjs')],
    {
      stdio: 'inherit',
    }
  );

  apiProcess.on('error', (error) => {
    console.error('Error starting the API server:', error);
  });
};
