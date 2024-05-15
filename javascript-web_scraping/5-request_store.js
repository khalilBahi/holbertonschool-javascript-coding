#!/usr/bin/node

const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const flPath = process.argv[3];

// Use request to make a GET request to the Star Wars API
request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    // Write the body to the file specified by flPath
    fs.writeFile(flPath, body, 'utf-8', (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
});
