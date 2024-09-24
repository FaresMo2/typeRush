import styled from "styled-components";

const FooterWrapper = styled.footer`
  position: relative;
  z-index: 100;
  width: 100%;
  padding: 20px 0;
  color: #fff;
  text-align: center;
  font-size: 18px;
  position: absolute;
  bottom: 0;
`;

const FooterText = styled.p`
  margin: 0;
  font-weight: 500;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterText>
        Created with passion by{" "}
        <FooterLink href="https://your-portfolio-link.com">Fares</FooterLink> |
        © {new Date().getFullYear()} Typing Speed Challenge
      </FooterText>
    </FooterWrapper>
  );
}

export default Footer;
