import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
export default function ProtectedRoute() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 
  const localData = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    if (localData === "true") {
      setIsAuthenticated(true);
    } else {
      navigate("/signup");
    }
  }, [localData]);
  if (isAuthenticated === false) {
    console.log("kfjgnmkldmkljnh");
  } else {
    return <Outlet />;
  }
}
