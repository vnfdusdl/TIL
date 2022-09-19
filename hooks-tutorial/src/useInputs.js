import { useReducer } from 'react';

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const useInputs = (initialForm) => {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChangeState = (e) => dispatch(e.target);

  return [state, onChangeState]
};

export default useInputs;
