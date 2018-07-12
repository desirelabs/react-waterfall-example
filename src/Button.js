import React from "react";
import { actions } from "./store/countStore";

const Button = () => <button onClick={() => actions.increment()}>up</button>;

export default Button;
