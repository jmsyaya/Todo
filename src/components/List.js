import styled from "styled-components";
import Item from "./Item";

//redux 사용
import { useSelector } from "react-redux";

const TodoListBlock = styled.div`
  flex: 1; /* 자신이 차지할 수 있는 영역 다 차지하기 */
  padding: 20px 30px; /* 위,아래:  20px, 왼,오: 30px*/
  padding-bottom: 48px; /* 아래 48px 변경 */
  overflow-y: auto; /* 스크롤이 발생할 경우 위,아래만 나오도록 */
  //   background: gray;
`;

function List() {
  //store 내용 가져오기
  let todos = useSelector((state) => {
    return state;
  });
  console.log("todos", todos.todos);
  return (
    <TodoListBlock>
      {/*  store 사용 전 
      <Item text="리액트 프로젝트 구상" done={true}></Item>
      <Item text="프로젝트 개발환경 구축" done={false}></Item>
      <Item text="프로젝트 생성" done={false}></Item>
      <Item text="기본 페이지 작성" done={false}></Item> */}

      {/* store 사용 후 - map */}
      {todos.todos.map((todo) => (
        <Item id={todo.id} text={todo.text} done={todo.done} key={todo.id} />
      ))}
    </TodoListBlock>
  );
}

export default List;
