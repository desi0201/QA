const Mocha = require('mocha');
const fs = require('fs');
const path = require('path');

// Instantiate a Mocha instance
const mocha = new Mocha();

// Add each test file to the Mocha instance
fs.readdirSync('test').filter(function(file) {
  // Only keep the .js files
  return file.slice(-3) === '.js';
}).forEach(function(file) {
  mocha.addFile(
    path.join('test', file)
  );
});

// Run the tests
mocha.run(function(failures) {
  process.exitCode = failures ? 1 : 0;  // exit with non-zero status if there were failures
});