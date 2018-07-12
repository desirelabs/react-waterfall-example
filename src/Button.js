import React from "react";
import { connect, actions } from "./store/store";

const Button = () => <button onClick={() => actions.increment()}>up</button>;

export default Button;
