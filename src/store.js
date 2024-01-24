import { configureStore, createSlice } from "@reduxjs/toolkit";

// 저장 데이터
let todos = createSlice({
  name: "todos",
  initialState: [
    { id: 1, text: "리액트 프로젝트 구상", done: true },
    { id: 2, text: "프로젝트 개발환경 구축", done: false },
    { id: 3, text: "프로젝트 생성", done: false },
    { id: 4, text: "기본 페이지 작성", done: false },
  ],
  reducers: {
    removeTodo(state, action) {
      // 넘어온 id 값 제외하고 리턴하기
      return state.filter((todo) => todo.id !== action.payload);
    },
    doneToggle(state, action) {
      // 넘어온 id 값의 done 확인 후 현재 상태에서 반대로 변경

      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    },
    createTodo(state, action) {
      //새로운 할일 추가
      return state.concat(action.payload);
    },
  },
});

// 외부에서 사용가능하도록 내보내기
export default configureStore({
  reducer: {
    todos: todos.reducer,
  },
});

//  외부에서 사용 가능하도록 함수 내보내기
export let { removeTodo, doneToggle, createTodo } = todos.actions;
