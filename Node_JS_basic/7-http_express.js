const http = require('http');
const fs = require('fs').promises;
const url = require('url');

const countStudents = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.trim().split('\n');

    const students = lines.slice(1).filter((line) => line.trim() !== '');
    const totalStudents = students.length;

    const fields = {};

    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    let result = `Number of students: ${totalStudents}\n`;
    for (const [field, names] of Object.entries(fields)) {
      result += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }
    return result.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

// Create the HTTP server
const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((err) => {
      res.send(`This is the list of our students\n${err.message}`);
    });
});
app.listen(port)

module.exports = app;
