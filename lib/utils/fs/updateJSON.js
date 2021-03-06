const fs = require('fs');
const chalk = require('chalk');
const path = require('path');
const isEqual = require('lodash.isequal');
const clone = require('lodash.clonedeep');

module.exports = (fileName, updator) => {
  const original = JSON.parse(fs.readFileSync(fileName).toString());
  const updated = updator(clone(original));
  if (isEqual(original, updated)) {
    console.log(`  ${chalk.yellow('up-to-date')} ${path.relative(process.cwd(), fileName)}`);
  } else {
    fs.writeFileSync(fileName, JSON.stringify(updated, null, 2));
    console.log(`  ${chalk.green('update')} ${path.relative(process.cwd(), fileName)}`);
  }
};
