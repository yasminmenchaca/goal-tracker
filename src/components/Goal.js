import React from 'react';

export default function Goal({goal, refreshGoals}) {
    const markGoalCompleted = async () => {
        try {
            await fetch('/.netlify/functions/goals', {
                method: 'PUT',
                body: JSON.stringify({...goal, completed: true}),
            });
            refreshGoals();
        } catch (err) {
            console.error(err);
        }
    };

    const deleteGoal = async () => {
        try {
            await fetch('/.netlify/functions/goals', {
                method: 'DELETE',
                body: JSON.stringify({id: goal.id}),
            });
            refreshGoals();
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div className="list-group-item">
            <h1>{goal.title}</h1>
            <h5>{goal.text}</h5>
            <p>
                Tags:{' '}
                {goal.tags &&
                goal.tags.map((tag, index) => (
                    <span className="badge badge-primary mr-2" key={index}>
                            {tag}
                        </span>
                ))}
            </p>
            {!goal.completed && (
                <button
                    className="btn btn-sm btn-primary"
                    onClick={markGoalCompleted}
                >
                    Completed
                </button>
            )}
            <button
                className="btn btn-sm btn-danger ml-2"
                onClick={deleteGoal}
            >
                Delete
            </button>
        </div>
    );
}
