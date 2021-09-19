import { NotFound } from "components/common";
import PrivateRoute from "components/common/PrivateRoute";
import { AdminPage } from "components/layout";
import LoginPage from "features/auth/pages/LoginPage";
import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <PrivateRoute path="/admin">
          <AdminPage />
        </PrivateRoute>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
