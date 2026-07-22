import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import LoginPage from "../pages/auth/LoginPage";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import MarketplacePage from "../pages/marketplace/MarketplacePage";
import VisitorsPage from "../pages/visitors/VisitorsPage";
import ProfilePage from "../pages/profile/ProfilePage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Authentication */}
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/forgot-password"
          element={<ForgotPasswordPage />}
        />

        {/* Main Pages */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/visitors" element={<VisitorsPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        {/* Unknown Routes */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}