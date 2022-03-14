import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DetailMovie from "./Pages/HomePage/DetailMovie/DetailMovie";
import HomePage from "./Pages/HomePage/HomePage";
import SignIn from "./SignInPage/SignIn";
import SignUp from "./SignUpPage/SignUp";
import Layout from "./Template/Layout";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          {/* <Route path="/movie/:id" component={DetailMovie} /> */}
          <Route
            path="/movie/:id"
            render={({ match }) => {
              return <Layout id={match.params.id} Component={DetailMovie} />;
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
