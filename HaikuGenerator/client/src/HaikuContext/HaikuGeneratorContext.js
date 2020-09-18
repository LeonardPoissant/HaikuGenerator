import React, { createContext, useState, useEffect } from "react";

export const HaikuGeneratorContext = createContext(null);

const HaikuGeneratorProvider = ({ children }) => {
  //Generate a haiku from all the databases
  const [generatedHaiku, setGeneratedHaiku] = useState([]);
  //const [generateNewHaiku, setGenerateNewHaiku] = useState(false);

  const generateNewHaiku = () => {
    fetch("/allHaikus")
      .then((res) => res.json())
      .then((randomHaiku) => {
        console.log(randomHaiku.dataBaseArray);
        setGeneratedHaiku(randomHaiku.dataBaseArray);
      });
  };

  /* useEffect(() => {
    const fetchData = async () => {
      fetch("/allHaikus")
        .then((res) => res.json())
        .then((randomHaiku) => {
          console.log(randomHaiku.dataBaseArray);
          setGeneratedHaiku(randomHaiku.dataBaseArray);
        });
    };
    fetchData();
  }, [generateNewHaiku]);*/

  console.log("GENERATEDHAIKU", generatedHaiku);

  return (
    <HaikuGeneratorContext.Provider
      value={{
        generatedHaiku,
        generateNewHaiku,
      }}
    >
      {children}
    </HaikuGeneratorContext.Provider>
  );
};

export default HaikuGeneratorProvider;
