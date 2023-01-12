import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { createTask } from '../features/tasks/taskSlice';

function TaskForm() {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createTask({ text }));
    setText('');
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Add New Task</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button
            className="btn btn-block"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
