const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

module.exports = {
    usfiscaldebt:store.collection('fiscaldebt')
};
