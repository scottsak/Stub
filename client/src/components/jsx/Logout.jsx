import React,{ useEffect, useState } from "react";
import { NavLink, useNavigate, Navigate } from "react-router-dom";





function Logout({LoggedInState, setLoggedIn}) 
{

    let navigate = useNavigate();
    const handleLogout = () =>
    {  
      let path = '/';
      navigate(path);
      setLoggedIn(false);
      localStorage.removeItem('userLoginData');
    }

    useEffect(() => {
      handleLogout();
    }, []);
  
   
    return <Navigate to="/" />;

}

export default Logout;

