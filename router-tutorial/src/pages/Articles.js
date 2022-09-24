import { Link, Outlet } from 'react-router-dom';

const Articles = () => {
  return (
    <div>
      {/* Oulet이 사용된 자리에 중첩된 라이트가 보여지게 된다.  */}
      <Outlet />
      <ul>
        <li>
          <Link to='/articles/1'>게시글1</Link>
        </li>
        <li>
          <Link to='/articles/2'>게시글2</Link>
        </li>
        <li>
          <Link to='/articles/3'>게시글3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Articles;
