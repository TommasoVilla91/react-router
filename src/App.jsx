import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticlesPage from "./pages/ArticlesPage";
import AdminLayout from "./components/AdminLayout";
import Dashboard from "./pages/Dashboard";
import ArticleCreatorPage from "./pages/ArticleCreatorPage";

function App() {

  

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/posts">
            <Route index element={<ArticlesPage />} />
            <Route path="create" element={<ArticleCreatorPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
