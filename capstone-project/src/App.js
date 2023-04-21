import "normalize.css";
import Login from "./Login";
import Main from "./Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Seongjeog from "./Seongjeog";
import Dashboard from "./Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />}>
          <Route path="/main" element={<Dashboard />} />
          <Route path="/main/seongjeog" element={<Seongjeog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
