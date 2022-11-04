import ShowPage from "./component/showPage";
import { Routes, Route } from "react-router-dom";
import ShowDetail from "./component/showDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<ShowPage />} />
        <Route path="/shows/:id" element={<ShowDetail />} />
      </Routes>
    </div>
  );
}

export default App;
