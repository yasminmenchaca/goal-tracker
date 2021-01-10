const formattedReturn = require('./helpers/formattedReturn');
const getGoals = require('./helpers/getGoals');
const createGoal = require('./helpers/createGoal');
const deleteGoal = require('./helpers/deleteGoal');
const updateGoal = require('./helpers/updateGoal');
exports.handler = async (event) => {
    if (event.httpMethod === 'GET') {
        return await getGoals(event);
    } else if (event.httpMethod === 'POST') {
        return await createGoal(event);
    } else if (event.httpMethod === 'PUT') {
        return await updateGoal(event);
    } else if (event.httpMethod === 'DELETE') {
        return await deleteGoal(event);
    } else {
        return formattedReturn(405, {});
    }
};
