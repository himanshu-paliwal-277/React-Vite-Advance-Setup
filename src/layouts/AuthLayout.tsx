import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
