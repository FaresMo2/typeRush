import styled from "styled-components";
import { useMemo, useState } from "react";
import Heading from "../components/Heading";
import { useSelector } from "react-redux";
import Timer from "../components/Timer";
import Result from "../components/Result";

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
  const status = useSelector((state) => state.game.status);
  const sentencesTest = useSelector((state) => state.game.sentences);
  const filterValue = useSelector((state) => state.game.level) || "easy";

  const filterLevel = useMemo(() => {
    if (filterValue === "easy")
      return sentencesTest.filter((level) => level.level === "easy");
    if (filterValue === "medium")
      return sentencesTest.filter((level) => level.level === "medium");
    if (filterValue === "hard")
      return sentencesTest.filter((level) => level.level === "hard");
  }, [filterValue, sentencesTest]);

  const randomTest = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * filterLevel.length);
    return filterLevel[randomIndex].test;
  }, [filterLevel]);

  return status === "finished" || textArea === randomTest ? (
    <Result textArea={textArea} randomTest={randomTest} />
  ) : (
    <StyledStartGame>
      <Heading>Game Started</Heading>
      <Text>{randomTest}</Text>
      <div>
        <TypeArea
          value={textArea}
          onChange={(e) => setTextArea(e.target.value)}
          placeholder={randomTest}
          disabled={textArea === randomTest}
        />
      </div>

      <Timer />
    </StyledStartGame>
  );
}

export default StartGame;
