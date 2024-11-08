import { useState } from "react";
import "./App.css";
import { Banner } from "./components/Banner/Banner";
import NavBar from "./components/NavBar/NavBar";
import { OurRecepies } from "./components/OurRecepies/OurRecepies";

function App() {
  const [recepies, setRecepies] = useState([]);

  const handleWantToCook = (recepi) => {
    console.log("click the recepi");
    const newRecepies = [...recepies, recepi];
    console.log(newRecepies);
    setRecepies(newRecepies);
  };

  return (
    <div className="px-8">
      <NavBar />
      <Banner />
      <OurRecepies handleWantToCook={handleWantToCook} recepies={recepies} />
    </div>
  );
}

export default App;
