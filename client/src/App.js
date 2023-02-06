import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

//pages & components
import Home from '../src/pages/Home'
import Brandlist from '../src/pages/brand'
import Bacardi from '../src/pages/Bacardi'
import Goslings from '../src/pages/Goslings'
import Sidebar from '../src/components/Sidebar'
import Topbar from '../src/components/Topbar'

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/brand" element={<Brandlist />} />
              <Route path="/Bacardi" element={<Bacardi />} />
              <Route path="/Goslings" element={<Goslings />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>

  );
}

export default App;
