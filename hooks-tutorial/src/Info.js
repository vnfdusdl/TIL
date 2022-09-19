import useInputs from './useInputs';

const Info = () => {
  const [state, onChange] = useInputs({
    name: '',
    nickname: '',
  });

  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name='name' value={name} onChange={onChange} />
        <input name='nickname' value={nickname} onChange={onChange} />
      </div>
      <div>
        <p>이름 : {name}</p>
        <p>별명 : {nickname}</p>
      </div>
    </div>
  );
};

export default Info;
