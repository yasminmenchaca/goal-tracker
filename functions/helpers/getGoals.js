const {table} = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
    try {
        const goals = await table.select().firstPage();
        const formattedGoals = goals.map(goal => ({id: goal.id, ...goal.fields,}))
        return formattedReturn(200, formattedGoals);
    } catch (err) {
        console.log(err);
        return formattedReturn(500, {msg: 'Something went wrong'})
    }
};
