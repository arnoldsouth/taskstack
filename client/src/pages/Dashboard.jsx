import { useEffect } from 'react';

import { FiList } from 'react-icons/fi';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { useNavigate } from 'react-router-dom';

import GoalForm from '../components/GoalForm';
import GoalItem from '../components/GoalItem';
import Spinner from '../components/Spinner';
import {
  getGoals,
  reset,
} from '../features/goals/goalSlice';

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/login');
    }

    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {/* <div className="heading">
        <div>Welcome {user && user.name}</div>
      </div> */}

      <GoalForm />

      <div className="heading">
        <div className="heading-task-list">
          <FiList /> Task List
        </div>
      </div>

      <div className="content">
        {goals.length > 0 ? (
          <div className="tasks">
            {goals.map((goal) => (
              <GoalItem
                key={goal._id}
                goal={goal}
              />
            ))}
          </div>
        ) : (
          <div>No tasks created or remaining</div>
        )}
      </div>
    </>
  );
}

export default Dashboard;
