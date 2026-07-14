import { useState } from "react";

import "./index.css";
import PageContainer from "./components/common/PageContainer";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />

      <PageContainer>
        <Home />
      </PageContainer>
    </>
  );
}

export default App;
