import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lessons from "./pages/lessons/Lessons";
import Chapters from "./pages/chapters/Chapters";
import Levels from "./pages/levels/Levels";
import Users from "./pages/users/Users";
import Settings from "./pages/settings/Settings";
import Header from "./layouts/header/Header";
import SideBar from "./layouts/sidebar/SideBar";

import "./App.scss";
import Lesson from "./pages/lesson/Lesson";

function App() {
  return (
    <div className="app" dir="rtl">
      <BrowserRouter>
        <SideBar />
        <div className="content">
          <Header />
          <Routes>
            <Route path="/" element={<Chapters />} />
            <Route path="/lessons" element={<Lessons />} />

            <Route path="lessons/lesson" element={<Lesson />} />

            <Route path="levels" element={<Levels />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
