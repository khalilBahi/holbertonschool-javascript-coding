#!/usr/bin/node
const request = require('request');

// Get the URL from the command line arguments
const url = process.argv[2];

// Use request to make a GET request to the URL
request.get(url, (error, response) => {
  // If an error occurred, print the error object
  if (error) {
    console.log(error);
  } else {
    // Print the status code of the response
    console.log(`code: ${response.statusCode}`);
  }
});
