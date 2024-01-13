import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard/Dashboard";
import Question from "./pages/Question/Question";
import Score from "./pages/Score/Score";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/question" element={<Question />} />
        <Route path="/score" element={<Score />} />
      </Routes>
    </>
  )
}

export default App
