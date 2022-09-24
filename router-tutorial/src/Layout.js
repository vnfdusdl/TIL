import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goArticle = () => {
    navigate('/articles', { replace: true });
  };

  return (
    <div>
      <header style={{ background: 'lightgray', padding: 16, fontSize: 24 }}>
        <button onClick={goBack}>뒤로 가기</button>
        <button onClick={goArticle}>게시글 목록</button>
      </header>
      <main>
        {/* 페이지 컴포넌트가 보여져야 하는 부분에 Outlet 컴포넌트 사용 */}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
