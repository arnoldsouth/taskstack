import {
  FiLogIn,
  FiLogOut,
  FiUser,
} from 'react-icons/fi';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  Link,
  useNavigate,
} from 'react-router-dom';

import {
  logout,
  reset,
} from '../features/auth/authSlice';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleOnLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <div className="header">
      <div className="header-logo">
        <Link to="/">taskSTACK</Link>
      </div>

      {user ? (
        <div className="header-welcome">Welcome back, {user && user.name}</div>
      ) : (
        <></>
      )}
      {/* <div className="header-login-register">Welcome {user && user.name}</div> */}

      <div className="header-login-register">
        <ul>
          {user ? (
            <li>
              <button
                // className="btn"
                className="btn-logout"
                onClick={handleOnLogout}
              >
                <FiLogOut /> Logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">
                  <FiLogIn /> Login
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <FiUser /> Sign up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Header;
