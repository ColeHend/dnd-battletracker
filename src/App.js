import React, { useState, createContext } from "react";
import "./App.css";
import Header from "./components/header/header";
import Body from "./components/body/body";
export const AppContext = createContext({});
function App() {
  let [appInfo, setAppInfo] = useState({
    initList: [],
  });

  return (
    <div className="App">
      <AppContext.Provider value={{ appInfo, setAppInfo }}>
        <Header />
        <Body />
      </AppContext.Provider>
    </div>
  );
}

export default App;
