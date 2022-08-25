#!/usr/bin/env node
const { exeSync } = require('child_process');
const runCommand = (command) => {
  try {
    exeSync(`${command}`, { sddio: 'inherit' });
  } catch (e) {
    console.error(`Faided to execute ${command}`, e);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/HoanNguyenDinh/whitelabel-starter-kit ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the repository with name ${repoName}`);
const checkOut = runCommand(gitCheckoutCommand);
if (!checkOut) process.exit(-1);
console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);
console.log('Congratulations! you are ready. Follow the following commands to start');
console.log(`cd ${repoName} && npm run dev`);
