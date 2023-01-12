import { useEffect } from 'react';

import { FiList } from 'react-icons/fi';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Spinner from '../components/Spinner';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';
import {
  getTasks,
  reset,
} from '../features/tasks/taskSlice';

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { tasks, isLoading, isError, message } = useSelector(
    (state) => state.tasks
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/login');
    }

    dispatch(getTasks());

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

      <TaskForm />

      <div className="heading">
        <div className="heading-task-list">
          <FiList /> Task List
        </div>
      </div>

      <div className="content">
        {tasks.length > 0 ? (
          <div className="tasks">
            {tasks.map((task) => (
              <TaskItem
                key={task._id}
                task={task}
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
