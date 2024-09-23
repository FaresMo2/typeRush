import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
  list-style: none;
`;

const Li = styled.li`
  font-size: 20px;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: white;

  &:hover {
    color: #007bff; /* Change color on hover */
  }
`;

function Nav() {
  return (
    <Ul>
      <Li>
        <StyledLink to="/">Home</StyledLink>
      </Li>
      <Li>
        <StyledLink to="/level">Level</StyledLink>
      </Li>
      <Li>
        <StyledLink to="about">About</StyledLink>
      </Li>
    </Ul>
  );
}

export default Nav;
