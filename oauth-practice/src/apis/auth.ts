import axiosInstance from './axiosInstance';

type Data = {
  code: string;
};

export const Login = (data: Data) => {
  return axiosInstance.post('/kakao/oauth', data);
};
