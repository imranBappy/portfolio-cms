import { redirect } from "next/dist/server/api-utils";
import React, { useEffect } from "react";
import { useState } from "react";


const PrivateRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!isAuthenticated) return redirect("/login");
  return children;
};

export default PrivateRoute;
