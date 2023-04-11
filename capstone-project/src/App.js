import "normalize.css";
import Login from "./Login";
import Sidebar from "./Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Seongjeog from "./Seongjeog";
function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/seongjeog" element={<Seongjeog />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
