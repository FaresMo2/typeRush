import styled from "styled-components";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const StyledApplayout = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: black;
  position: relative;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1; // To make sure the video stays behind the content
  /* opacity: 0.97; */
  opacity: 0.75;
`;

const Main = styled.main`
  display: flex;
  width: 100%;
  justify-content: center;
  height: calc(100vh - 139px);
`;

function AppLayout() {
  return (
    <StyledApplayout>
      <BackgroundVideo autoPlay loop muted>
        <source src="/home.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideo>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </StyledApplayout>
  );
}

export default AppLayout;
