import { useEffect, useState } from "react";
import "./App.scss";
import MainPage from "./containers/MainPage/MainPage";
import Menu from "./containers/Menu/Menu";
import Pokedex from "./containers/Pokedex/Pokedex";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [mainPageTimeOut, setMainPageTimeOut] = useState(true);

  useEffect(() => {
    setTimeout(() => setMainPageTimeOut(false), 3000);
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/mainpokedex" element={<Pokedex />} />
          <Route
            path="/"
            element={
              <>
                {mainPageTimeOut && <MainPage />}
                {!mainPageTimeOut && <Menu />}
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
