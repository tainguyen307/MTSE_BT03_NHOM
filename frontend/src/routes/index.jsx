import { createBrowserRouter, Navigate } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import { AuthLayout } from "../layouts/AuthLayout";
import { ROUTES } from "../constants";

// Auth pages
import { LoginPage } from "../features/auth/pages/LoginPage";
import { RegisterPage } from "../features/auth/pages/RegisterPage";
import { ForgotPasswordPage } from "../features/auth/pages/ForgotPasswordPage";

// User pages
import { ProfilePage } from "../features/user/pages/ProfilePage";

// Protected Route wrapper
import { ProtectedRoute } from "./ProtectedRoute";
import { GuestRoute } from "./GuestRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={ROUTES.LOGIN} replace />,
      },
      {
        path: ROUTES.PROFILE,
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
      // Placeholder routes - chuẩn bị cho tương lai
      {
        path: ROUTES.COURTS,
        element: (
          <ProtectedRoute>
            <div className="p-8 text-center">Courts Page - Coming Soon</div>
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.BOOKINGS,
        element: (
          <ProtectedRoute>
            <div className="p-8 text-center">Bookings Page - Coming Soon</div>
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.LEAGUES,
        element: (
          <ProtectedRoute>
            <div className="p-8 text-center">Leagues Page - Coming Soon</div>
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.EVENTS,
        element: (
          <ProtectedRoute>
            <div className="p-8 text-center">Events Page - Coming Soon</div>
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: ROUTES.LOGIN,
        element: (
          <GuestRoute>
            <LoginPage />
          </GuestRoute>
        ),
      },
      {
        path: ROUTES.REGISTER,
        element: (
          <GuestRoute>
            <RegisterPage />
          </GuestRoute>
        ),
      },
      {
        path: ROUTES.FORGOT_PASSWORD,
        element: (
          <GuestRoute>
            <ForgotPasswordPage />
          </GuestRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
          <a href={ROUTES.HOME} className="text-blue-600 hover:underline">
            Go back home
          </a>
        </div>
      </div>
    ),
  },
]);
