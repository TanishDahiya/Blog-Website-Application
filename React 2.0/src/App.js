import { hot } from "react-hot-loader/root";
import React from "react";
import AddBlog from "./components/AddBlog";
import EditBlog from "./components/EditBlog";
import ViewBlog from "./components/View";
import Home from "./components/Home";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/edit-blog/:id" component={EditBlog}></Route>
            <Route path="/addblog" component={AddBlog}></Route>
            <Route path="/view-blog/:id" component={ViewBlog}></Route>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default hot(App);
