import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { createUser } from "../features/user/userSlice";
import Heading from "../components/Heading";

const Form = styled.form`
  position: relative;
  width: 50%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 220px;
  z-index: 100;
`;

const Input = styled.input`
  margin-inline: auto;
  width: 50%;
  padding: 15px 30px;
  border-radius: 30px;
  color: white;
  display: block;
  background-color: transparent;
  border: 1px solid white;
  outline: none;
  font-size: 17px;
`;

const Button = styled.button`
  margin-inline: auto;
  padding: 15px 30px;
  width: 150px;
  border-radius: 17px;
  cursor: pointer;
  color: white;
  background-color: transparent;
  border: 1px solid white;
  outline: none;
  font-weight: bold;
  transition: all 0.3s;
  &:hover {
    background-color: gray;
  }
`;

// bg-gradient-to-b from-zinc-200

function Home() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;

    dispatch(createUser(name));
    navigate("/level");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Heading>Enter Your Name</Heading>

      <Input
        type="text"
        placeholder="Enter your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {name && <Button>Selevt Level !</Button>}
    </Form>
  );
}

export default Home;
