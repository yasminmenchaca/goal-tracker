const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
    const fields = JSON.parse(event.body);
    try {
        const createdGoal = await table.create([{ fields }]);
        return formattedReturn(200, createdGoal);
    } catch (err) {
        console.error(err);
        return formattedReturn(500, {});
    }
};