import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SelectLevel from "./pages/SelectLevel";
import StartGame from "./pages/StartGame";
import AppLayout from "./components/AppLayout";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="level" element={<SelectLevel />} />
          <Route path="about" element={<About />} />
          <Route path="game" element={<StartGame />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
