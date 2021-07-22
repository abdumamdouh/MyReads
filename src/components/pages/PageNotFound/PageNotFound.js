import React from "react";
import classes from "./PageNotFound.module.css";
const PageNotFound = () => {
  return (
    <div className={classes.container}>
      <div>
        <h2>Error 404</h2>
        <h3>Page Not Found</h3>
      </div>
    </div>
  );
};

export default PageNotFound;
