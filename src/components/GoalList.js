import React from 'react';
import Goal from './Goal';

export default function GoalList({ goals, refreshGoals }) {
    return (
        <div>
            <h2 className="mt-5 mb-3">Backlog</h2>
            <div className="list-group">
                {goals
                    .filter((goal) => !goal.completed)
                    .map((goal) => (
                        <Goal
                            goal={goal}
                            key={goal.id}
                            refreshGoals={refreshGoals}
                        />
                    ))}
            </div>
            <h2 className="mt-5 mb-3">Already Purchased</h2>
            {goals
                .filter((goal) => goal.completed)
                .map((goal) => (
                    <Goal
                        goal={goal}
                        key={goal.id}
                        refreshGoals={refreshGoals}
                    />
                ))}
        </div>
    );
}
