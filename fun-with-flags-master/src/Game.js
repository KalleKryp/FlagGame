import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AnswerBox from "./AnswerBox";

const CentreWrapper = styled.div`
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
`;

const Flag = styled(({ flag, ...props }) => <div {...props}>{flag}</div>)`
  font-size: 5em;
  line-height: 1em;
  padding: 0;
  margin: 0;
`;

const Results = styled(({ score, attempts, ...props }) => (
  <div {...props}>
    Score: <span>{score}</span>, Attempts: <span>{attempts}</span>
  </div>
))`
  display: block;
  font-size: 1.5em;
  span {
    font-weight: bold;
  }
`;

const shuffle = arr => [...arr].sort(() => 0.5 - Math.random());

export default props => {
  const [flags, setFlags] = useState(() => shuffle(props.flags));
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(props.attempts);

  const nextFlag = () => {
    setFlags(flags.length > 1 ? flags.slice(1) : shuffle(props.flags));
    setAttempts(props.attempts);
  };

  const onCorrect = () => {
    setScore(score + 1);
    nextFlag();
  };

  const onIncorrect = () => {
    if (attempts > 1) {
      setAttempts(attempts - 1);
      return;
    }

    setScore(Math.max(0, score - 1));
    nextFlag();
  };

  const [{ emoji, name }] = flags;

  useEffect(() => props.cheatMode && console.log(name), [name]);

  return (
    <CentreWrapper>
      <Flag flag={emoji} />
      <AnswerBox
        answer={name}
        onCorrect={onCorrect}
        onIncorrect={onIncorrect}
      />
      <Results score={score} attempts={attempts} />
    </CentreWrapper>
  );
};
