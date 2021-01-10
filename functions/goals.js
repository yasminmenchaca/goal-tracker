const formattedReturn = require('./helpers/formattedReturn');
const getGoals = require('./helpers/getGoals');
const createGoal = require('./helpers/createGoal');
const deleteGoal = require('./helpers/deleteGoal');
const updateGoal = require('./helpers/updateGoal');
exports.handler = async (event) => {
    // TODO: call appropriate helper function based on HTTP method
    return formattedReturn(200, 'Hello World');
};
