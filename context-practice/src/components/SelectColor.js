import { ColorConsumer } from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColor = () => {
  return (
    <div>
      <h2> 색상을 선택하세요. </h2>
      <ColorConsumer>
        {(value) => (
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
                onClick={() => value.actions.setColor(color)}
                onContextMenu={(e) => {
                  // 마우스 오른쪽 버튼 클릭 시 메뉴가 뜨는 것을 무시
                  e.preventDefault();
                  value.actions.setSubcolor(color);
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>
      <hr />
    </div>
  );
};

export default SelectColor;
