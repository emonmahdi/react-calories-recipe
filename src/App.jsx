import './App.css'
import { Banner } from "./components/Banner/Banner";
import NavBar from "./components/NavBar/NavBar";
import { OurRecepies } from "./components/OurRecepies/OurRecepies";

function App() { 

  return (
    <div className="px-20">
      <NavBar />
      <Banner />
      <OurRecepies />
    </div>
  );
}

export default App
