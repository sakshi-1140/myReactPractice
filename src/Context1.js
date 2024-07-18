import React from "react";

//syntax to create context
const myContext= React.createContext();

//make provider
export const Provider = myContext.Provider;


//make consumer
export const Consumer = myContext.Consumer;