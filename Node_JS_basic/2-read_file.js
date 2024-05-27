const fs = require('fs');

function countStudents(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.log('Error:', err);
    } else {
      const lines = data.split('\n');
      const headers = lines[0].split(',');
      const idx = headers.indexOf('field');
      console.log(`Number of students: ${lines.length - 1}`);
      console.log(`Number of students in CS: ${lines.filter((line) => line.split(',')[idx] === 'CS').length - 1}`);
      console.log(`Number of students in SWE: ${lines.filter((line) => line.split(',')[idx] === 'SWE').length - 1}`);
    }
  });
}

module.exports = countStudents;
