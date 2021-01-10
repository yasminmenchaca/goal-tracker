import React, {useEffect, useState} from 'react';
import './App.css';
import GoalList from './components/GoalList';
import GoalForm from './components/GoalForm';

function App() {
    const [goals, setGoals] = useState([]);

    const loadGoals = async () => {
        try {
            const res = await fetch('/api/goals');
            const goals = await res.json();
            setGoals(goals);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadGoals();
    }, []);
    return (
        <div className="container mt-5">
            <h1 className="mb-5 text-center">Goal Tracker</h1>
            <GoalForm goalAdded={loadGoals} />
            <GoalList goals={goals} refreshGoals={loadGoals} />
        </div>
    );
}

export default App;
