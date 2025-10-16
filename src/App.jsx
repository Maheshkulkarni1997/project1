import './App.css';
import { useState } from "react";
import NavbarExample from "./NavbarExample"; // Your custom navbar
import { Routes } from "react-router";
import { AppRoute } from './AppRoute';
// You can add more component imports as needed

function App() {
  const [user, setUser] = useState('');

  return (
    <>
      <NavbarExample />
      <div className="container mt-4">
        <Routes>
          {AppRoute}
        </Routes>

      </div>
    </>
  );
}

export default App;
