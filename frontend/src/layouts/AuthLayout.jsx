import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundImage: "linear-gradient(90deg, rgb(252, 248, 248) 0%, rgb(252, 248, 248) 100%)"
      }}
    >
      <Outlet />
    </div>
  );
}
