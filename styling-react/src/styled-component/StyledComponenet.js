import styled, { css } from 'styled-components';

const StyledComponent = () => {
    return (
        <Box color='black'>
            <Button>안녕하세요</Button>
            <Button inverted={true}>테두리만</Button>
        </Box>
    )
}

export default StyledComponent;


const Box = styled.div`
  background-color: ${(props) => props.color || 'blue'};
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024) {
    width: 768px
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Button = styled.button`
  background-color: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;
  /* &은 본인 선택자 */
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
  /* props로 받은 inverted 값이 true일 때만 특정 스타일 부여하기 */
  ${props =>
  props.inverted &&
  css`
  background: none;
  border: 2px solid white;
  color: white;
  /* hover되었을 때 */
  &:hover {
    background-color: white;
    color: black;
  }
`}
/* 형제 선택자 */
  &+button {
    margin-left: 1rem;
}
`;






