import axios from 'axios';
import { useState } from 'react';
import useAsync from './useAsync';
import User from './User';

const fetchUsers = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  return res.data;
};

const Users = () => {
  const [userId, setUserId] = useState(null);
  const [state, fetchData] = useAsync(fetchUsers, [], true);

  if (state.loading) return <div>로딩중..</div>;
  if (state.error) return <div>에러가 발생샜습니다</div>;
  if (!state.data) return <button onClick={fetchData}>불러오기</button>;
  return (
    <div className='Users'>
      <ul>
        {state.data.map((user) => (
          <li key={user.id}
          onClick={() => setUserId(user.id)}
          style={{cursor: 'pointer'}}
          >
            {user.username}({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchData}>다시 불러오기</button>
      {userId && <User id={userId}/>}
    </div>
  );
};

export default Users;
