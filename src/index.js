import React from "react";
import ReactDOM  from "react-dom";
import App from "./routes/App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <App />
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



