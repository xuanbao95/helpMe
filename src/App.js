
import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { RouteHomePage } from "./route";
import HomeTemplate from "./template/HomeTemplate";
import "react-toastify/dist/ReactToastify.css"
import {ToastContainer} from "react-toastify"


function App() {
  const showMenuHome = (route) => {
    if (route && route.length > 0) {
      return route.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            component={item.component}
          />
        )
      })
    }
  }
  return (
    <BrowserRouter>
    <ToastContainer/>
      <Switch>
        {showMenuHome(RouteHomePage)}
        <Route path="" component={PageNotFound} />
        <Route />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
