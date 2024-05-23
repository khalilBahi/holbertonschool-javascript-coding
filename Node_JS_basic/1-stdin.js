process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.resume();

process.stdin.on('readable', () => {
  const name = process.stdin.read();

  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

// Ensure the process ends when the user sends an interrupt signal (Ctrl+C)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
