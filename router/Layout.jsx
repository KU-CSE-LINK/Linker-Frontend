import { Outlet } from "react-router-dom";
import Header from "../src/components/Header/Header";
import Bottom from "../src/components/Bottom/Bottom";
import styled from "styled-components";
// import "./Layout.css"; // CSS 파일 추가
const Contaniner = styled.div`
  max-width: 500px; /* 모바일 기본 크기 설정 */
  width: 80%; /* 모바일에서는 가로 폭이 꽉 차지 않도록 */
  margin: auto; /* 가운데 정렬 */
  display: flex;
  flex-direction: column;
  /* background-color:black; */
  /* height: 832px; */
  aspect-ratio: 832/800;
  justify-content: space-between;
  @media (min-width: 1024px) {
    max-width: 900px; /* PC에서는 넓게 */
  }
`;
const Layout = () => {
  return (
    <Contaniner>
      <header>
        <Header admin="profileIcon" />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Bottom />
      </footer>
    </Contaniner>
  );
};

export default Layout;
