import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled(Link)`
  color: white;
  font-size: 32px;
  font-weight: bold;
  text-decoration: none;
`;

function Logo() {
  return <StyledLogo to="/">TypeRush</StyledLogo>;
}

export default Logo;
