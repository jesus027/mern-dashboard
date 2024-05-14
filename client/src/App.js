import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "theme";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from 'scenes/layout';
import Dashboard from 'scenes/dashboard';
import Products from "scenes/products";
import Custormers from "scenes/customers";
import Transactions from "scenes/transactions";
import Geography from "scenes/geography";
import Overview from "scenes/overview";
import Daily from "scenes/dialy";
import Monthly from "scenes/monthly";
import Breakdown from "scenes/breakdown";
import Admins from "scenes/admins";
import Performance from "scenes/performance";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />}/>
              <Route path="/productos" element={<Products />}/>
              <Route path="/clientes" element={<Custormers />}/>
              <Route path="/transacciones" element={<Transactions />} />
              <Route path="/geografía" element={<Geography />} />
              <Route path="/resumen" element={<Overview />} />
              <Route path="/resumen diario" element={<Daily />} />
              <Route path="/resumen mensual" element={<Monthly />} />
              <Route path="/descripción general" element={<Breakdown />} />
              <Route path="/administrador" element={<Admins />} />
              <Route path="/rendimiento" element={<Performance />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
