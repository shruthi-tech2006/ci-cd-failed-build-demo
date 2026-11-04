const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

if (html.includes('Wrong Website Content')) {
    console.log('TEST PASSED');
} else {
    console.error('TEST FAILED: Website content missing');
    process.exit(1);
}
