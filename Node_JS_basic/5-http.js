const http = require('http');
const fs = require('fs').promises;

const countStudents = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.trim().split('\n');

    const students = lines.slice(1).filter(line => line.trim() !== '');
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
const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!\n');
  }

  if (req.url === '/students') {
    res.statusCode = 200;
    const dbPath = process.argv[2];
    const studentsInfo = await countStudents(dbPath);
    res.end(`This is the list of our students\n${studentsInfo}`);
  }
});

app.listen(1245);

module.exports = app;
