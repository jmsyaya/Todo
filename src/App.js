import { createGlobalStyle } from "styled-components";
import Main from "./components/Main";
import Header from "./components/Header";
import List from "./components/List";
import Create from "./components/Create";

function App() {
  //전체 스타일 적용
  const GlobalStyle = createGlobalStyle`
  body{
    background:#e9ecef;
  }
  `;
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Main>
        <Header></Header>
        <List></List>
        <Create />
      </Main>
    </>
  );
}

export default App;
