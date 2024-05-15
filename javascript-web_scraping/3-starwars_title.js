#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];

// Use request to make a GET request to the Star Wars API
request.get(`https://swapi-api.hbtn.io/api/films/${movieId}`, (error, response) => {
  if (error) {
    console.log(error);
  } else {
    // Parse the response body as JSON
    const data = JSON.parse(response.body);

    // Print the title of the movie
    console.log(data.title);
  }
});
