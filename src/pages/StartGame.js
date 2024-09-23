import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import Heading from "../components/Heading";
import { useSelector } from "react-redux";

const StyledStartGame = styled.div`
  position: relative;
  width: 80%;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 20px;
  text-align: center;
  z-index: 100;
`;

const TypeArea = styled.textarea`
  display: inline-block;
  width: 50%;
  height: 200px;
  border: 2px solid white;
  border-radius: 10px;
  outline: none;
  /* background-color: #333; */
  background-color: transparent;
  caret-color: white;
  color: white;
  font-size: 20px;
  padding: 15px;
  resize: none;
`;

const Text = styled.h2`
  font-size: 24px;
`;

function StartGame() {
  const [textArea, setTextArea] = useState("");
  const sentencesTest = useSelector((state) => state.game.sentences);
  console.log(sentencesTest);
  console.log(sentencesTest[0]);

  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("level") || "easy";
  let filterLevel;

  if (filterValue === "easy")
    filterLevel = sentencesTest.filter((level) => level.level === "easy");
  if (filterValue === "medium")
    filterLevel = sentencesTest.filter((level) => level.level === "medium");
  if (filterValue === "hard")
    filterLevel = sentencesTest.filter((level) => level.level === "hard");

  let randomIndex = Math.floor(Math.random() * filterLevel.length);
  let randomTest = filterLevel[randomIndex].test;

  console.log(randomTest);

  const test = "Fares Mohamed afsdf sdf sfds f sdfsd fsd fsd fs fsd fsd fsd";

  return (
    <StyledStartGame>
      <Heading>Game Started</Heading>
      <Text>{randomTest}</Text>
      <div>
        <TypeArea
          value={textArea}
          onChange={(e) => setTextArea(e.target.value)}
          placeholder={test}
          disabled={textArea === test}
        />
      </div>
    </StyledStartGame>
  );
}

export default StartGame;
