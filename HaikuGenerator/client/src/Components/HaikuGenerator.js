import React, { useContext } from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";

import { HaikuGeneratorContext } from "../HaikuContext/HaikuGeneratorContext";

const HaikuGenerator = () => {
  const { generatedHaiku, generateNewHaiku } = useContext(
    HaikuGeneratorContext
  );

  return (
    <div>
      <Header>
        <h1>GENERATE HAIKUS / CREATE A HAIKU DATABASE</h1>
        <LinkTo to={"/CreateMyHaikuDataBase"}>Create new haikus</LinkTo>
      </Header>
      <HaikuWrapper>
        <HaikuDisplay>
          {generatedHaiku.map((verse) => {
            return <HaikuVerse>{verse}</HaikuVerse>;
          })}
        </HaikuDisplay>
        <button onClick={() => generateNewHaiku()}>GENERATE</button>
      </HaikuWrapper>
    </div>
  );
};

const Header = styled.div`
  height: 20vh;
  display: flex;
`;

const LinkTo = styled(Link)`
  text-decoration: none;
`;

const HaikuWrapper = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const HaikuDisplay = styled.div`
  padding: 70px;
`;

const HaikuVerse = styled.p`
  padding: 5px;
`;

export default HaikuGenerator;
