import { CircularProgress } from "@mui/material";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  let { user, admin, isLoading } = useAuth();
  if (isLoading) {
    return <CircularProgress />;
  } else {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.email && admin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/home",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }
};

export default AdminRoute;
