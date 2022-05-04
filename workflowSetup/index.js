const open = require("open");

const urls = [
  'google.com',
  'youtube.com'
];

for(const url of urls){
  open(url, {app: {name: 'brave'}});
}

// Use Cases
// Create multiple workFlowSetup files depending on tasks