import React, { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const NotFound = () => {
  // to get the value in the url
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/", { state: "hell" });
      //-------------->   take back to the previous page -----------
      // navigate(-1);
    }, 1000);
  }, []);

  // ------> Navigate <----------------------->
  // return <Navigate to={"/"} />;

  return <h1>NotFound </h1>;
};

export default NotFound;
