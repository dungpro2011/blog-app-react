import { useDispatch } from 'react-redux';
import HomePage from './pages/HomePage';
import Login from './pages/login';
import * as actions from './redux/actions';

function App() {
  const dispatch = useDispatch();

  dispatch(actions.getPosts.getPostsRequest());

  return (
    <>
      <Login />
      {/* <HomePage /> */}
    </>
  );
}

export default App;
