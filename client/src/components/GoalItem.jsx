import {
  FiLogIn,
  FiX,
} from 'react-icons/fi';
import { useDispatch } from 'react-redux';

import { deleteGoal } from '../features/goals/goalSlice';

function GoalItem({ goal }) {
  const dispatch = useDispatch();

  return (
    <div className="task">
      <div className="task-item">{goal.text}</div>
      <div className="task-item-date">
        {new Date(goal.createdAt).toLocaleString('en-US')}
      </div>
      <button
        onClick={() => dispatch(deleteGoal(goal._id))}
        className="close"
      >
        <FiX />
      </button>
    </div>
  );
}

export default GoalItem;
