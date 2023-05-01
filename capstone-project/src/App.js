import "normalize.css";
import Login from "./Login";
import Main from "./Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Seongjeog from "./Seongjeog";
import Home from "./Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />}>
          <Route path="/main" element={<Home />} />
          <Route path="/main/seongjeog" element={<Seongjeog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
