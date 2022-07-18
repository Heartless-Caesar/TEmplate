import React from "react";
import ReactDOM from "react-dom";
import AuthForm from "./Components/authForms";
import Navbar from "./Components/Navbar";
import InventoryBody from "./Components/inventory/inventoryList";
function App() {
  return (
    <>
      <Navbar />
      <AuthForm />
      <InventoryBody />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
