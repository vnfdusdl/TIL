import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginPage = () => {
  // const navigate = useNavigate();
  const REST_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
  const REDIRECT_URI = 'http://localhost:3000/login/kakao/oauth';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const RedirectHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <>
      <KakaoButton onClick={RedirectHandler}>카카오 로그인</KakaoButton>
    </>
  );
};

export default LoginPage;

const KakaoButton = styled.button`
  width: 300px;
  padding: 20px;
  background: yellow;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
