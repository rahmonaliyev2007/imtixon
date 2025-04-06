import "./App.css";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import { ConfigProvider, App as AntdApp } from "antd";
import { Toaster } from "sonner";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard_Layout from "./pages/Dashboard";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import Teachers from "./pages/Dashboard/Teachers/Teachers";
import Add from "./pages/Add/Add";
import AboutTeacher from "./pages/AboutTeacher/AboutTeacher";

function App() {
  return (
    <ConfigProvider>
      <AntdApp>
        <Toaster position="top-right" richColors />
        <Routes>
          <Route element={<Dashboard_Layout />} path="/">
            <Route index element={<Dashboard />} />
            <Route element={<Teachers />} path="teachers" />
            <Route element={<Add />} path="add" />
            <Route element={<NotFound />} path="*" />
            <Route element={<AboutTeacher />} path="aboutTeacher/:id" />

          </Route>
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />

          <Route element={<NotFound />} path="*" />
        </Routes>
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
