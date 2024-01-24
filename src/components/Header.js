import styled from "styled-components";

const TodoHeaderBlock = styled.div`
  //   padding-top: 48px;
  //   padding-left: 32px;
  //   padding-right: 32px;
  //   padding-bottom: 24px;
  padding: 48px 32px 24px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }

  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }

  .Myname {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function Header() {
  //오늘 날짜 추출
  const today = new Date();

  // toLocaleDateString(locales, [옵션]) : 옵션에 오는 부분은 날짜 형식 스타일
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const day = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <TodoHeaderBlock>
      <h1>{dateString}</h1>
      <div className="day">{day}</div>
      <div className="Myname">Create By 정명식</div>
    </TodoHeaderBlock>
  );
}

export default Header;
