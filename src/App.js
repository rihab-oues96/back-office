import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lessons from "./pages/lessons/Lessons";
import Chapters from "./pages/chapters/Chapters";
import Levels from "./pages/levels/Levels";
import Users from "./pages/users/Users";
import Settings from "./pages/settings/Settings";
import Header from "./layouts/header/Header";
import SideBar from "./layouts/sidebar/SideBar";

import "./App.scss";

function App() {
  return (
    <div className="app" dir="rtl">
      <BrowserRouter>
        <SideBar />
        <div className="content">
          <Header />
          <Routes>
            <Route path="/" element={<Chapters />}></Route>
            <Route path="lessons" element={<Lessons />}></Route>
            <Route path="levels" element={<Levels />}></Route>
            <Route path="users" element={<Users />}></Route>
            <Route path="settings" element={<Settings />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
