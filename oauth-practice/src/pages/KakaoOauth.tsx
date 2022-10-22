import axios from 'axios';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const KakaoOauth = () => {
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const getKakao = async () => {
    try {
      const codeParam = params.get('code');
      const res = await axios.post('serverApiUrl', {
        code: codeParam,
      });
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
