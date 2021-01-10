import React from 'react';

export default function Goal({ goal, refreshGoals }) {
    const markGoalCompleted = async () => {
        //TODO mark goal as completed
    };

    const deleteGoal = async () => {
        //TODO delete goal
    };
    return (
        <div className="list-group-item">
            <a href={goal.link}>
                <h4 className="list-group-item-heading">{goal.name}</h4>
            </a>
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
