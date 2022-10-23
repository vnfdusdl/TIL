import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Login } from '../apis/auth';
import { useMutation } from '@tanstack/react-query';

type Code = {
  code: string;
};

const KakaoOauth = () => {
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  
  const postCodeMutate = useMutation((code: Code) => Login(code), {
    onSuccess: (response) => {
      const { accessToken, refreshToken } = response.data.content;
      window.localStorage.setItem('login', JSON.stringify({ accessToken, refreshToken }));
      navigate('/');
    },
    onError: (e: any) => {
      throw new Error(e);
    },
  });

  const getKakao = async () => {
    const codeParam: string | null = params.get('code');
    if (codeParam === null) {
      return;
    }
    postCodeMutate.mutate({ code: codeParam });

    // try {
    //   const codeParam: string | null = params.get('code');
    //   if (codeParam === null) {
    //     return;
    //   }
    //   const res = await Login({ code: codeParam });
    //   if (res) {
    //     const { accessToken, refreshToken } = res.data.content;
    //     window.localStorage.setItem('login', JSON.stringify({ accessToken, refreshToken }));
    //   }
    //   navigate('/');
    // } catch (e: any) {
    //   throw new Error(e);
    // }
  };

  useEffect(() => {
    getKakao();
  }, [getKakao]);

  return <></>;
};
export default KakaoOauth;
