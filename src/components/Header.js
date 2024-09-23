import styled from "styled-components";
import Logo from "./Logo";
import Nav from "./Nav";

const StyledHeader = styled.header`
  height: 99px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 220px;
  position: relative;
  z-index: 200;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Nav />
    </StyledHeader>
  );
}

export default Header;
