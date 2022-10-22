import axios from 'axios';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Login } from '../apis/auth';

const KakaoOauth = () => {
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const getKakao = async () => {
    try {
      const codeParam = params.get('code')!; // ! 연산자 사용하지 않고 다른 방법..
      const res = await Login({ code: codeParam });
      if (res) {
        const { accessToken, refreshToken } = res.data.content;
        window.localStorage.setItem('login', JSON.stringify({ accessToken, refreshToken }));
      }
      navigate('/');
    } catch (e: any) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    getKakao();
  }, [getKakao]);

  return <></>;
};
export default KakaoOauth;
