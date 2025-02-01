import { Outlet } from "react-router-dom";
import Header from "../src/components/Header/Header";
import Bottom from "../src/components/Bottom/Bottom";
import styled from "styled-components";
const Contaniner = styled.div`
  max-width: 500px;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;

  aspect-ratio: 832/800;
  justify-content: space-between;
  @media (min-width: 1024px) {
    max-width: 900px;
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
