import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MainPage = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate('/login');
  };

  return (
    <div>
      <Button onClick={onClickHandler}>로그인페이지 가기</Button>
    </div>
  );
};

export default MainPage;

const Button = styled.button`
  width: 200px;
  padding: 20px 10px;
  border: none;
  background-color: skyblue;
`