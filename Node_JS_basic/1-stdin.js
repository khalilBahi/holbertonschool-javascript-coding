console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (data) => {
  // Get the user's input and remove any trailing newline or carriage return characters
  const name = data.toString().trim();

  console.log(`Your name is: ${name}`);
  process.exit();
});

// Ensure the process ends when the user sends an interrupt signal (Ctrl+C)
process.on('SIGINT', () => {
  console.log('\nThis important software is now closing');
  process.exit();
});
