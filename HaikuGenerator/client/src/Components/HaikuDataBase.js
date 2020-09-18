import React, { useContext, useState } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { HaikuContext } from "../HaikuContext/HaikuDataBaseContext";

const CreateHaikuDatabase = () => {
  const {
    handleCreateHaikuDatabase,
    haikuDataBaseName,
    setHaikuDataBaseName,
    haikuArray,
    setHaikuArray,
  } = useContext(HaikuContext);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const haikuList = [...haikuArray];
    haikuList[index][name] = value;
    setHaikuArray(haikuList);
  };

  //handle adding new input fields

  const handleAddClick = () => {
    setHaikuArray([...haikuArray, { verse1: "", verse2: "", verse3: "" }]);
  };

  console.log("ARRAYsdfsdf", haikuArray);

  return (
    <Wrapper>
      MY HAIKU DATABASE
      <LinkTo to={"/HaikuGenerator"}>To generator</LinkTo>
      <HaikuDataBaseForm onSubmit={(e) => handleCreateHaikuDatabase(e)}>
        <input
          type="text"
          placeholder="Choose your haiku data base name"
          value={haikuDataBaseName}
          onChange={(e) => setHaikuDataBaseName(e.target.value)}
        ></input>
        {haikuArray.map((x, i) => {
          return (
            <div>
              <input
                type="text"
                name="verse1"
                placeholder="type in a verse"
                value={x.verse1}
                onChange={(e) => handleInputChange(e, i)}
              ></input>
              <input
                type="text"
                name="verse2"
                placeholder="type in a verse"
                value={x.verse2}
                onChange={(e) => handleInputChange(e, i)}
              ></input>
              <input
                type="text"
                name="verse3"
                placeholder="type in a verse"
                value={x.verse3}
                onChange={(e) => handleInputChange(e, i)}
              ></input>
              <div>
                {haikuArray.length - 1 === i && (
                  <button onClick={handleAddClick}>ADD</button>
                )}
              </div>
            </div>
          );
        })}

        <SubmitHaikuDbButton type="submit">Submit Verses</SubmitHaikuDbButton>
      </HaikuDataBaseForm>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const HaikuDataBaseForm = styled.form``;

const SubmitHaikuDbButton = styled.button`
  padding: 10px;
`;

const LinkTo = styled(Link)`
  text-decoration: none;
`;
export default CreateHaikuDatabase;
