#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

// Use request to make a GET request to the Star Wars API
request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    const completedTasks = {};
    for (const datas of data){
        if (datas.completed){
            if (completedTasks[datas.userId]){
                completedTasks[datas.userId]++; 
            }else {
                completedTasks[datas.userId] = 1;
            }
        }
    }
    console.log(completedTasks);
  }
});
