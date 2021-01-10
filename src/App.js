import React, { useEffect, useState } from 'react';
import './App.css';
import GoalList from './components/GoalList';
import GoalForm from './components/GoalForm';

function App() {
    const [courses, setGoals] = useState([]);

    const loadGoals = async () => {
        //TODO:load the courses
    };

    useEffect(() => {
        loadGoals();
    }, []);
    return (
        <div className="container mt-5">
            <h1 className="mb-5 text-center">Course Tracker</h1>
            <GoalForm courseAdded={loadGoals} />
            <GoalList courses={courses} refreshCourses={loadGoals} />
        </div>
    );
}

export default App;
