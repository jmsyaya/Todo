import styled from "styled-components";

// 흰색 직사각형 디자인
const TodoMainBlock = styled.div`
  width: 512px;
  height: 768px;
  background: white;

  margin: 0 auto; /* 가로 가운데 위치 */
  margin-top: 96px;
  margin-bottom: 32px;

  border-radius: 16px; /* 테두리 둥글게 */
  /* 0 0 8px 0 => 위 0 오른쪽 0 아래 8px 왼쪽 0 */
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2); /*그림자 설정*/

  position: relative;

  display: flex;
  flex-direction: column;
`;

function Main({ children }) {
  return (
    <>
      <TodoMainBlock>{children}</TodoMainBlock>
    </>
  );
}

export default Main;
