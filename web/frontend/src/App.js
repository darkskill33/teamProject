import { useEffect, useState } from "react";
import Authentication from "./Components/Authentication/Authentication";

import MyContext from "./context";

import Header from "./Components/MainSections/Header";
import Footer from "./Components/MainSections/Footer";
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
        <Header />

        <Content />

        <Footer />
      </>
      }
    </div>
  </MyContext.Provider>


  );
}

export default App;
