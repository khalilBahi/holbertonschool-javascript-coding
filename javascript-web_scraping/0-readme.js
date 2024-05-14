#!/usr/bin/node
const fs = require('fs');

// Get the file path from the command line arguments
const filePath = process.argv[2];

// Use fs.readFile to read the file content in utf-8
fs.readFile(filePath, 'utf-8', (error, data) => {
    // If an error occurred, print the error object
    if (error) {
        console.log(error);
    } else {
        // Print the content of the file
        console.log(data);
    }
});
