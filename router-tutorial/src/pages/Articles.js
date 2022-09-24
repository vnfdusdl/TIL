import { NavLink, Outlet } from 'react-router-dom';

const Articles = () => {
  const activeStyle = {
    color: 'green',
    fontSize: 21,
  };

  return (
    <div>
      {/* Oulet이 사용된 자리에 중첩된 라이트가 보여지게 된다.  */}
      <Outlet />
      <ul>
        <li>
          <NavLink to='/articles/1' style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            게시글1
          </NavLink>
        </li>
        <li>
          <NavLink to='/articles/2' style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            게시글2
          </NavLink>
        </li>
        <li>
          <NavLink to='/articles/3' style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            게시글3
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Articles;
