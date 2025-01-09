import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppArticles from "./components/AppArticles";
import AppLayout from "./components/AppLayout";
import Home from "./components/Home";
import About from "./components/About";

function App() {

  

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<AppArticles />} />          
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>

    
  
  )
};

export default App
