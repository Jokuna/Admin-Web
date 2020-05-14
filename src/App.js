import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import AuthSignUp from "./pages/auth/AuthSignUp";
import AdminMain from "./pages/main/AdminMain";
import Loading from "./pages/loading/Loading";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route exact path="/signup" component={AuthSignUp} />
          <Route path="/admin" component={AdminMain} />
        </Switch>
      </Router>

    <Loading />
    </div>
  );
}

export default App;
