import React, {useState} from 'react';
import Tags from './Tags';

export default function GoalForm({goalAdded}) {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [tags, setTags] = useState([]);
    const [count, setCount] = useState(0);

    const resetForm = () => {
        setTitle('');
        setText('');
        setCount(count + 1);
    };

    const submitGoal = async (e) => {
        e.preventDefault();
        try {
            await fetch('/api/goals', {
                method: 'POST',
                body: JSON.stringify({
                    title,
                    text,
                    tags,
                }),
            });
            resetForm();
            goalAdded();
        } catch (err) {
            console.error(err);
        }
        console.log(title, text);
    };

    return (
        <div className="card">
            <div className="card-header">Add a New Goal</div>
            <div className="card-body">
                <form className="" onSubmit={submitGoal}>
                    <div className="form-group">
                        <label htmlFor="title">title</label>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            className="form-control"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="text">text</label>
                        <input
                            type="text"
                            name="text"
                            value={text}
                            className="form-control"
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <p>Tags</p>
                        <Tags tagsUpdated={setTags} key={count}/>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}