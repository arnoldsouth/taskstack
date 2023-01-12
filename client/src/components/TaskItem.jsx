import { FiX } from 'react-icons/fi';
import { useDispatch } from 'react-redux';

import { deleteTask } from '../features/tasks/taskSlice';

function TaskItem({ task }) {
  const dispatch = useDispatch();

  return (
    <div className="task">
      <div className="task-item">{task.text}</div>
      <div className="task-item-date">
        {new Date(task.createdAt).toLocaleString('en-US')}
      </div>
      <button
        onClick={() => dispatch(deleteTask(task._id))}
        className="close"
      >
        <FiX />
      </button>
    </div>
  );
}

export default TaskItem;
