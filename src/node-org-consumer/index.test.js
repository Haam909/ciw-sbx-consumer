const test = require('node:test');
const assert = require('node:assert');
test('uses the package from Azure Artifacts', () => assert.strictEqual(require('./index.js')(1000), '1s'));
