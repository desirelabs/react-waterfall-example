import React from "react";
import { connect } from "./store/store";
import Button from "./Button";
import "./styles.css";

const App = ({ count }) => (
  <div className="App">
    <h1>Count : {count}!</h1>
    <Button />
  </div>
);

export default connect(state => ({ count: state.count, user: state.user }))(
  App
);
