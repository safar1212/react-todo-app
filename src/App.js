import "./App.css";
import TodoContainer from "./components/TodoContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/about";
import NotMatch from "./pages/NotMatch";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
      {/* <TodoContainer />
        <About /> */}
      {/* </Route> */}
      {/* <NotMatch /> */}
    </Router>
  );
}

export default App;
