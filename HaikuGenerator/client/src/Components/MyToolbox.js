import React from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";

const ToolBox = () => {
  return (
    <div>
      <h1>THIS IS MY TOOLBOX</h1>
      <ToolsWrapper>
        <Tool to={"/HaikuGenerator"}>HAIKU GENERATOR</Tool>
      </ToolsWrapper>
    </div>
  );
};

const ToolsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; ;
`;

const Tool = styled(Link)`
  color: black;
  text-decoration: none;
  border-style: solid;
  padding: 50px;
`;

export default ToolBox;
