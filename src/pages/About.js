import styled from "styled-components";

const StyledAbout = styled.div`
  position: relative;
  z-index: 100;
  color: white;
  padding: 40px;
  border-radius: 10px;
  max-width: 800px;
  margin: 20px auto;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin: 10px 0;
`;

function About() {
  return (
    <StyledAbout>
      <Heading>About Us</Heading>
      <Paragraph>
        Welcome to the Typing Speed Challenge! Our mission is to help you
        improve your typing speed and accuracy through engaging exercises and
        real-time feedback.
      </Paragraph>
      <Paragraph>
        We believe that everyone can enhance their typing skills, whether for
        personal development or professional needs. Our platform offers a
        variety of difficulty levels to cater to all users, from beginners to
        advanced typists.
      </Paragraph>
      <Paragraph>
        Join us on this journey to become a faster and more accurate typist!
      </Paragraph>
    </StyledAbout>
  );
}

export default About;
