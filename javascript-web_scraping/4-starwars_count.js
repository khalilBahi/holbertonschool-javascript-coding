#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

let i = 0;

request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    // Parse the response body as JSON
    const data = JSON.parse(body);
    const results = data.results;
    for (const result of results) {
      const characters = result.characters;
      console.log (characters)
      for (const character of characters) {
        // count characters whose URL includes '18'
        if (character.includes('18')) {
          i++;
        }
      }
    }
    console.log(i);
  }
});
