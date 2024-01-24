import styled, { css } from "styled-components";
import { MdDone, MdDeleteForever } from "react-icons/md";
//redux 사용
import { useDispatch } from "react-redux";
//redux 함수 가져오기
import { removeTodo, doneToggle } from "../store";

// 왼쪽 체크박스 스타일
/* width,height,border-radius 로 원 만들기 */
/* 테두리 색깔 -> border */
const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`; // 체크박스 체크 시 테두리 색상

// todo 텍스트 스타일
const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;
// todo 휴지통 스타일
const Remove = styled.div`
  opacity: 0; /* 처음엔 안보이도록 */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    /* 마우스를 가져다 댈 경우 */
    color: #ff6b6b;
  }
`;
// todo 목록 스타일
const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;

  &:hover {
    ${Remove} {
      opacity: 1; /*휴지통 안보였던 걸 보여주기 */
    }
  }
`;

function Item({ id, text, done }) {
  let dispatch = useDispatch();

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={() => dispatch(doneToggle(id))}>
        {done && <MdDone></MdDone>}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={() => dispatch(removeTodo(id))}>
        <MdDeleteForever></MdDeleteForever>
      </Remove>
    </TodoItemBlock>
  );
}

export default Item;
