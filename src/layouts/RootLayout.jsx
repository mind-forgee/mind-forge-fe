// RootLayout.jsx
import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadingSpinner from "../components/ui/LoadingSpinner";

export default function RootLayout() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 3000); 
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <LoadingSpinner visible={loading} />}
      <Outlet />
    </>
  );
}
