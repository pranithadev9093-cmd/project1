const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const loadCsvData = (fileName) => {
    return new Promise((resolve, reject) => {
        const results = [];
        const filePath = path.join(__dirname, '../../data', fileName); // Assuming data is in root/data

        // Check if file exists to avoid crashing
        if (!fs.existsSync(filePath)) {
            console.warn(`Data file not found: ${filePath}`);
            return resolve([]);
        }

        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => {
                resolve(results);
            })
            .on('error', (err) => {
                reject(err);
            });
    });
};

module.exports = { loadCsvData };
