const { spawn } = require('child_process');
const path = require('path');

console.log('\x1b[36m%s\x1b[0m', '🌟 Starting Glow Care Full Stack Development Environment...');

const isWin = process.platform === 'win32';
const npmCmd = isWin ? 'npm.cmd' : 'npm';

// 1. Start Backend API Server
const backend = spawn(npmCmd, ['run', 'dev'], {
  cwd: path.join(__dirname, 'backend'),
  stdio: 'pipe',
  shell: true
});

backend.stdout.on('data', (data) => {
  process.stdout.write(`\x1b[33m[Backend API]\x1b[0m ${data}`);
});
backend.stderr.on('data', (data) => {
  process.stderr.write(`\x1b[31m[Backend Error]\x1b[0m ${data}`);
});

// 2. Start Frontend Vite Dev Server
const frontend = spawn(npmCmd, ['run', 'dev'], {
  cwd: path.join(__dirname, 'frontend'),
  stdio: 'pipe',
  shell: true
});

frontend.stdout.on('data', (data) => {
  process.stdout.write(`\x1b[32m[Frontend UI]\x1b[0m ${data}`);
});
frontend.stderr.on('data', (data) => {
  process.stderr.write(`\x1b[31m[Frontend Error]\x1b[0m ${data}`);
});

function cleanup() {
  console.log('\n\x1b[33m%s\x1b[0m', 'Shutting down Glow Care servers...');
  backend.kill();
  frontend.kill();
  process.exit();
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
