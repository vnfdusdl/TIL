import { useContext } from 'react';
import ColorContext from '../contexts/color';
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColor = () => {
  // useContext hook을 사용하여 provider의 value값을 해당 컴포넌트로 가져옴.
  const colorCtx = useContext(ColorContext);
  return (
    <div>
      <h2> 색상을 선택하세요. </h2>

      <div style={{ display: 'flex' }}>
        {colors.map((color) => (
          <div
            key={color}
            style={{
              background: color,
              width: '24px',
              height: '24px',
              cursor: 'pointer',
            }}
            // ColorContext의 actions에 접근해서 상태변화함수 실행
            onClick={() => colorCtx.actions.setColor(color)}
            onContextMenu={(e) => {
              // 마우스 오른쪽 버튼 클릭 시 메뉴가 뜨는 것을 무시
              e.preventDefault();
              colorCtx.actions.setSubcolor(color);
            }}
          />
        ))}
      </div>

      <hr />
    </div>
  );
};

export default SelectColor;
