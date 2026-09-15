const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Your search API route
app.get('/api/search', (req, res) => {
    const query = req.query.q;
    const directoryPath = path.join(__dirname, 'src');
    
    let results = [];

    // Recursively search for files
    const searchFiles = (dir) => {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            const fullPath = path.join(dir, file);
            if (fs.statSync(fullPath).isDirectory()) {
                searchFiles(fullPath);
            } else {
                if (file.includes(query)) {
                    results.push(fullPath);
                }
            }
        });
    };

    searchFiles(directoryPath);
    
    res.json({ results });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
