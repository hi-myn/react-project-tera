//estilização
import "./styles/normalize.css";
import "./styles/fontawesome.min.css";
import "./styles/main.css";

import { BrowserRouter, Routes, Route } from "react-router-dom"; //npm i react-router-dom

import InicialPage from "./components/pages/InicialPage";
import Users from "./components/pages/Users";
import BlogUsers from "./components/pages/BlogUsers";
import CreatePost from "./components/pages/CreatePost";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InicialPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<BlogUsers />} />
        <Route path="/users/:userId/post" element={<CreatePost />} />
        <Route path="*" element={ <h1>PAGE NOT FOUND</h1> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
