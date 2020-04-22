import React from "react";
import "./styles.css";
import store from "./redux/store";
import { increment, decrement, reset, increment2, decrement2 } from "./redux/contador/contador-actions";

function App() {
  return (
    <div className="App">
      <div className="contador-container">
        <div className="contador-title">{store.getState().contador}</div>
        <button
          className="contador-btn"
          onClick={() => store.dispatch(increment())}
        >
          +
        </button>
        <buntton
        className="contador-btn"
        onClick={() => store.dispatch(decrement())}> -1</buntton>

      <buntton
        className="contador-btn"
        onClick={() => store.dispatch(reset())}> reset</buntton>

      <buntton
        className="contador-btn"
        onClick={() => store.dispatch(increment2())}> +2</buntton>
        
      <buntton
        className="contador-btn"
        onClick={() => store.dispatch(decrement2())}> -2</buntton>
      </div>
     
    </div>
  );
}

export default App;
