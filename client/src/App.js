import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import './App.css';
import EmpListing from './EmpListing';
import EmpSummary from './EmpSummary';
import EmpCreate from './EmpCreate';
import EmpDetail from './EmpDetail';
import EmpEdit from './EmpEdit';
import HomePage from "scenes/homePage";
import Breakdown from "scenes/breakdown";
import Navtab from "scenes/navtab";
import LoginPage from "scenes/loginPage";
import QrCode from "components/QrCode";
import Settings from "components/Settings";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/qrcode"
              element={isAuth ? <QrCode /> : <Navigate to="/" />}
            />
            {/* <Route
            path="/responses"
            element={isAuth ? <EmpListing /> : <Navigate to="/" />}
          /> */}
          <Route path='/analytics' element={<Navtab />}></Route>
          <Route path='/summary' element={<EmpSummary />}></Route>
          <Route path='/breakdown' element={<Breakdown />}></Route>
          <Route
              path="/settings"
              element={isAuth ? <Settings /> : <Navigate to="/" />}
            />
          <Route path='/responses/employee/create' element={<EmpCreate />}></Route>
          <Route path='/responses/employee/detail/:empid' element={<EmpDetail />}></Route>
                <Route
              path="/responses"
              element={isAuth ? <Emplisting /> : <Navigate to="/" />}
            />
          <Route path='/responses/employee/edit/:empid' element={<EmpEdit />}></Route>
          {/* <Route path='/responses/employee/detail/:empid'
          element={isAuth ? <EmpDetail /> : <Navigate to="/" />} />
          <Route path='/responses/employee/edit/:empid'
          element={isAuth ? <EmpEdit /> : <Navigate to="/" />} /> */}
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
