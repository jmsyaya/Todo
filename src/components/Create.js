import styled, { css } from "styled-components";
import { MdAdd, MdADD } from "react-icons/md";
import { useState, useRef } from "react";

//redux 사용
import { useDispatch } from "react-redux";
//redux 함수 가져오기
import { removeTodo, doneToggle, createTodo } from "../store";

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5; /* 숫자가 클수록  우선순위 높음 (중첩되고 우선순위) */
  cursor: pointer;
  width: 80px;
  height: 80px;

  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding: 32px 32px 72px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function Create() {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);

  //useRef() : 변수, 재렌더링 후에도 변경된 값을 유지, 값이 변경되어도 제렌더링 되지 않음
  const nextID = useRef(5);
  // 새롭게 입력되는 todo 관리
  const [value, setValue] = useState("");

  let dispatch = useDispatch();

  //todo 입력 후 엔터 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault(); //새로고침 방지
    //todo객체 생성
    const todo = { id: nextID.current, text: value, done: false };

    dispatch(createTodo(todo));

    //다음 todo 입력을 위해 id 하나 증가
    nextID.current += 1;
    // 입력 완료 후 아이콘 원래대로
    setOpen(false);
    // 입력후 입력칸에 남아있는 데이터 삭제
    setValue("");
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              autoFocus
              placeholder="할 일을 입력한 뒤 Enter를 누르세요"
              value={value}
              onChange={(e) => setValue(e.target.value)}></Input>
          </InsertForm>
        </InsertFormPositioner>
      )}

      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default Create;
