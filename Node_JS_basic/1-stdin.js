console.log('Welcome to Holberton School, what is your name?');

// Listen for data from standard input (stdin)
process.stdin.on('data', (data) => {
  // Get the user's input and remove any trailing newline or carriage return characters
  const name = data.toString().trim();
  console.log(`Your name is: ${name}`);

  console.log('This important software is now closing');
  process.exit();
});
