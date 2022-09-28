// 액션 타입
// 액션 타입은 대문자로 정의하고, 문자열 내용은 '모듈이름/액션이름' 과 같은 형태로 작성한다.
// 문자열 안에 모듈 이름을 넣음으로써 나중에 프로젝트가 커졌을 때 액션의 이름이 충돌되지 않게 한다.
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 초기 상태
const initialState = {
  number: 0,
};

// 리듀서
const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
};

export default counter;
