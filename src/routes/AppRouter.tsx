import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "../components/layout/DashboardLayout";

// Auth
import LoginForm from "../pages/auth/LoginForm";

// Dashboard
import DashboardPage from "../pages/dashboard/DashboardPage";

// Marketplace
import MarketplacePage from "../pages/marketplace/MarketplacePage";
import CreateListingPage from "../pages/marketplace/CreateListingPage";
import ListingDetailsPage from "../pages/marketplace/ListingDetailsPage";

// Service Requests
import ServiceRequestsPage from "../pages/service-requests/ServiceRequestsPage";
import CreateRequestPage from "../pages/service-requests/CreateRequestPage";
import RequestDetailsPage from "../pages/service-requests/RequestDetailsPage";

// Business
import BusinessDirectoryPage from "../pages/business-directory/BusinessDirectoryPage";
import BusinessDetailsPage from "../pages/business/BusinessDetailsPage";

// Notifications
import NotificationsPage from "../pages/notifications/NotificationsPage";

// Announcements
import AnnouncementFeedPage from "../pages/announcements/AnnouncementFeedPage";
import CreateAnnouncementPage from "../pages/announcements/CreateAnnouncementPage";

// Visitors
import VisitorsPage from "../pages/visitors/VisitorsPage";
import RegisterVisitorPage from "../pages/visitors/RegisterVisitorPage";
import VisitorDetailsPage from "../pages/visitors/VisitorDetailsPage";

// Estate Management
import EstateManagementPage from "../pages/estate-management/EstateManagementPage";
import EstateSettingsPage from "../pages/estate-management/EstateSettingsPage";

// Profile
import EstateProfilePage from "../pages/estate/EstateProfilePage";


export default function AppRouter() {

  return (

    <BrowserRouter>

      <Routes>

        {/* LOGIN */}
        <Route
          path="/login"
          element={<LoginForm />}
        />


        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <DashboardPage />
            </DashboardLayout>
          }
        />


        {/* MARKETPLACE */}
        <Route
          path="/marketplace"
          element={
            <DashboardLayout>
              <MarketplacePage />
            </DashboardLayout>
          }
        />

        <Route
          path="/create-listing"
          element={
            <DashboardLayout>
              <CreateListingPage />
            </DashboardLayout>
          }
        />

        <Route
          path="/listing/:id"
          element={
            <DashboardLayout>
              <ListingDetailsPage />
            </DashboardLayout>
          }
        />


        {/* SERVICE REQUESTS */}
        <Route
          path="/service-requests"
          element={
            <DashboardLayout>
              <ServiceRequestsPage />
            </DashboardLayout>
          }
        />

        <Route
          path="/create-request"
          element={
            <DashboardLayout>
              <CreateRequestPage />
            </DashboardLayout>
          }
        />

        <Route
          path="/service-request/:id"
          element={
            <DashboardLayout>
              <RequestDetailsPage />
            </DashboardLayout>
          }
        />


        {/* ANNOUNCEMENTS */}
        <Route
          path="/announcements"
          element={
            <DashboardLayout>
              <AnnouncementFeedPage />
            </DashboardLayout>
          }
        />

        <Route
          path="/create-announcement"
          element={
            <DashboardLayout>
              <CreateAnnouncementPage />
            </DashboardLayout>
          }
        />


        {/* VISITORS */}
        <Route
          path="/visitors"
          element={
            <DashboardLayout>
              <VisitorsPage />
            </DashboardLayout>
          }
        />

        <Route
          path="/register-visitor"
          element={
            <DashboardLayout>
              <RegisterVisitorPage />
            </DashboardLayout>
          }
        />

        <Route
          path="/visitor/:id"
          element={
            <DashboardLayout>
              <VisitorDetailsPage />
            </DashboardLayout>
          }
        />


        {/* BUSINESS DIRECTORY */}
        <Route
          path="/business-directory"
          element={
            <DashboardLayout>
              <BusinessDirectoryPage />
            </DashboardLayout>
          }
        />

        <Route
          path="/business/:id"
          element={
            <DashboardLayout>
              <BusinessDetailsPage />
            </DashboardLayout>
          }
        />


        {/* NOTIFICATIONS */}
        <Route
          path="/notifications"
          element={
            <DashboardLayout>
              <NotificationsPage />
            </DashboardLayout>
          }
        />


        {/* ESTATE MANAGEMENT */}
        <Route
          path="/estate-management"
          element={
            <DashboardLayout>
              <EstateManagementPage />
            </DashboardLayout>
          }
        />

        <Route
          path="/estate-settings"
          element={
            <DashboardLayout>
              <EstateSettingsPage />
            </DashboardLayout>
          }
        />


        {/* PROFILE */}
        <Route
          path="/estate-profile"
          element={
            <DashboardLayout>
              <EstateProfilePage />
            </DashboardLayout>
          }
        />

      </Routes>

    </BrowserRouter>

  );
}