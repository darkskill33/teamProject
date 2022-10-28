import { useEffect, useState } from "react";
import Authentication from "./Components/Authentication/Authentication";

import MyContext from "./context";

import Header from "./Components/MainSections/Header";
import Content from "./Components/MainSections/Content";

function App() {

  const [authenticated, setAuthenticated] = useState(false);
  const [UID, setUID] = useState('');

  useEffect(()=>{
    console.log(UID);
  },[UID])

  return (
  <MyContext.Provider value={{UID,setUID}} >
    <div className="App">
      {
      !authenticated ? <Authentication props={{setAuthenticated}}/>
      :
      <>
        {authenticated=='unauthenticated' ? <Header isAuthenticated={false}/> : <Header isAuthenticated={true}/>}

        {authenticated=='unauthenticated' ? <Content isAuthenticated={false}/> : <Content isAuthenticated={true}/>}

      </>
      }
    </div>
  </MyContext.Provider>


  );
}

export default App;