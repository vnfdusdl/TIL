import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
      <ul>
        <li>
          <Link to='/about'>소개로 이동</Link>
        </li>
        <li>
          <Link to='/profile/velopert'>velopert</Link>
        </li>
        <li>
          <Link to='/profile/gildong'>gildong</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
