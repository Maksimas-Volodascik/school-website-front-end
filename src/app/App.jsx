import { Route, Routes } from "react-router-dom";
import { PublicAccess, PrivateAccess } from "../lib/authProvider";
import Layout from "./Layout";
import Login from "./routes/login";
import Dashboard from "./routes/Dashboard";
import StudentList from "./routes/StudentList";
import TeacherList from "./routes/TeacherList";
import Classes from "./routes/Classes";
import Grades from "./routes/Grades";
import Calendar from "./routes/Calendar";

function App() {
  return (
    <Routes>
      <Route element={<PublicAccess />}>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<PrivateAccess />}>
        <Route element={<Layout />}>
          {/*<Route path="/register" element={<Register />} />*/}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/teachers" element={<TeacherList />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/calendar" element={<Calendar />} />
        </Route>
      </Route>
    </Routes>
  );
}
export default App;
