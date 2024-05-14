#!/usr/bin/node
const fs = require('fs');

// Get the file path from the command line arguments
const filePath = process.argv[2];
const content = process.argv[3];

// Use fs.readFile to read the file content in utf-8
fs.writeFile(filePath, content, 'utf-8', (error) => {
    // If an error occurred, print the error object
    if (error) {
        console.log(error);
    }
});
