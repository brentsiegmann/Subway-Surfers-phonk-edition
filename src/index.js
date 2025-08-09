import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div className="app">
      <Floor />
    </div>
  );
}

function Floor() {
  return (
    <div className="floor">
      <div className="tile1 tile"></div>
      <div className="tile2 tile"></div>
      <div className="tile3 tile"></div>
      <div className="tile4 tile"></div>
      <div className="tile5 tile"></div>
      <div className="tile6 tile"></div>
      <div className="tile7 tile"></div>
      <div className="tile8 tile"></div>
      <div className="tile9 tile"></div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
