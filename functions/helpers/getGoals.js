const {table} = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
    // TODO: get goals
    const goals = await table.select().firstPage();
    return formattedReturn(200, goals);
};
