// server.js (or express.js file)
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

// API to read all files and return content
app.get('/api/files', (req, res) => {
  const dirPath = path.join(__dirname, 'D:\aysha\react folder\dashboard3\src\components\MyClubs.jsx'); // Adjust the path to your source folder
  const files = [];

  fs.readdir(dirPath, (err, fileNames) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to read directory' });
    }

    fileNames.forEach((fileName) => {
      const filePath = path.join(dirPath, fileName);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      files.push({ fileName, content: fileContent });
    });

    res.json(files);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
