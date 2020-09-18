import React, { createContext, useEffect, useState } from "react";

export const HaikuContext = createContext(null);

const HaikuDataBaseProvider = ({ children }) => {
  const [haikuDataBaseName, setHaikuDataBaseName] = useState("");
  const [haikuDataBase, setHaikuDataBase] = useState({});
  const [haikuArray, setHaikuArray] = useState([
    { verse1: "", verse2: "", verse3: "" },
  ]);

  const handleCreateHaikuDatabase = async (e) => {
    e.preventDefault();

    fetch("/myHaiku", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        haikuDataBaseName,
        haikuArray,
      }),
    })
      .then((res) => res.json())
      .then((myDataBase) => {
        setHaikuDataBaseName("");

        setHaikuDataBase(myDataBase);
        console.log(myDataBase);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <HaikuContext.Provider
      value={{
        handleCreateHaikuDatabase,
        haikuDataBaseName,
        setHaikuDataBaseName,
        haikuArray,
        setHaikuArray,
      }}
    >
      {children}
    </HaikuContext.Provider>
  );
};

export default HaikuDataBaseProvider;
