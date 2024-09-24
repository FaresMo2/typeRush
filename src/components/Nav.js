import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom"; // Import NavLink
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
  text-transform: capitalize;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  color: white;

  &.active {
    color: #007bff; /* Color for active link */
    font-weight: bold; /* Optional: Make active link bold */
  }

  &:hover {
    color: #007bff; /* Change color on hover */
  }
`;

function Nav() {
  const name = useSelector((state) => state.user.name);
  return (
    <Ul>
      <Li>
        <StyledNavLink to="/level" activeClassName="active">
          Level
        </StyledNavLink>
      </Li>
      <Li>
        <StyledNavLink to="/about" activeClassName="active">
          About
        </StyledNavLink>
      </Li>
      <Li>
        <StyledNavLink to="/" activeClassName="active">
          {name}
        </StyledNavLink>
      </Li>
    </Ul>
  );
}

export default Nav;
