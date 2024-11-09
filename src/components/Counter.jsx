import React from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../action/CounterAction";

export default function Counter() {
    const dispath = useDispatch();
    const count = useSelector(state => state.count)
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Button variant="contained" onClick={() => dispath(increment())}>+</Button>
      <span style={{ margin: "0 10px", fontSize: "1.5rem" }}>{count}</span>
      <Button variant="contained" onClick={() => dispath(decrement())}>-</Button>
    </div>
  );
}
