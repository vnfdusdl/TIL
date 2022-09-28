import { Fragment } from 'react';
import { authActions } from './store/index';
import { useDispatch, useSelector } from 'react-redux';

import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {isAuthenticated ? <UserProfile /> : <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
