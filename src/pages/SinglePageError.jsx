import React from "react";
import { useRouteError } from "react-router-dom";
// page k and koi bhi error ayega to yh component rnder hoga
// for example url m problem h
// axios ka error
const SinglePageError = () => {
  const error = useRouteError();
  console.log(error);

  // return <h2>{error.message}</h2>;
  return <h2>There was an error...</h2>;
};

export default SinglePageError;
