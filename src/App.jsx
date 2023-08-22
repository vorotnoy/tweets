import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { TweetsPage } from "./pages/TweetsPage/TweetsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" >
          <Route index element={<HomePage />} />
          <Route path="/tweets" element={<TweetsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
