import React from "react";
import { Container, Button } from "@atoms";
import { SingleParticipantCounter } from "@molecules";
import useStore from "@state";

const Counter = () => {
  const {
    username,
    counter: { participants },
  } = useStore();

  const mainUserPicks = participants.find(({ name }) => name === username);

  return (
    <Container>
      <SingleParticipantCounter />
    </Container>
  );
};

export default Counter;
