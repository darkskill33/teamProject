import React from "react";

const UID = '0';
const setUID = function(){return 0};

const MyContext = React.createContext({UID,setUID});

export default MyContext;