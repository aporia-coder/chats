import React from "react";
import GlobalContextProvider from "./context/GlobalContext";
import { Dashboard } from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <GlobalContextProvider>
        <Dashboard />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
