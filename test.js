
const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

if (html.includes('Welcome to CI/CD Pipeline')) {
    console.log('TEST PASSED: Website content found');
} else {
    console.error('TEST FAILED: Website content missing');
    process.exit(1);
}
