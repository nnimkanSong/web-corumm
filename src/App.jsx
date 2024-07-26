import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/ui/NotFound";
import UI from "./components/ui/UI";
import Info from "./components/Info";
import Vision from "./components/Vision";
import Applying from "./components/Applying";
import Index from "./components/info/Index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route element={<UI />}>
          <Route path="/" element={<Home />} />
          <Route path="/Info" element={<Info />} />
          <Route path="/Info/:id" element={<Index />} />
          <Route path="/Vision" element={<Vision />} />
          <Route path="/Applying" element={<Applying />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
