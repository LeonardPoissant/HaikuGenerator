import React, { useContext, useState } from "react";
import styled from "styled-components";

import { HaikuContext } from "../HaikuContext/HaikuDataBaseContext";

const CreateHaikuDatabase = () => {
  const {
    handleCreateHaikuDatabase,
    haikuDataBaseName,
    setHaikuDataBaseName,
    haikuVerse1,
    setHaikuVerse1,
    haikuVerse2,
    setHaikuVerse2,
    haikuVerse3,
    setHaikuVerse3,
    //haikuArray,
    // setHaikuArray,
  } = useContext(HaikuContext);

  //const populateHaikuArray = (e) => {};
  const [haikuArray, setHaikuArray] = useState([]);

  const handleChange = (i, e) => {
    const haikuArray = [...haikuArray];
    haikuArray[i] = e.target.value;
    setHaikuArray(haikuArray);
  };

  console.log("ARRAY", haikuArray);

  return (
    <Wrapper>
      MY HAIKU DATABASE
      <HaikuDataBaseForm onSubmit={(e) => handleCreateHaikuDatabase(e)}>
        <input
          type="text"
          placeholder="Choose your haiku data base name"
          value={haikuDataBaseName}
          onChange={(e) => setHaikuDataBaseName(e.target.value)}
        ></input>

        <input
          type="text"
          placeholder="type in a verse"
          value={""}
          onChange={(i, e) => handleChange(i, e)}
        ></input>
        <input
          type="text"
          placeholder="type in a verse"
          value={haikuVerse2}
          onChange={(e) => setHaikuVerse2(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="type in a verse"
          value={haikuVerse3}
          onChange={(e) => setHaikuVerse3(e.target.value)}
        ></input>
        <SubmitHaikuDbButton type="submit"></SubmitHaikuDbButton>
      </HaikuDataBaseForm>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const HaikuDataBaseForm = styled.form``;

const SubmitHaikuDbButton = styled.button``;

export default CreateHaikuDatabase;
