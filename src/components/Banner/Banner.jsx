import { Button } from "../../shared/Button";
import "./Banner.css";

export const Banner = () => {
  return (
    <div className="banner-section">
      <div className="hero-area">
        <h1>Discover an exceptional cooking class tailored for you!</h1>
        <p>
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding problems to become an exceptionally
          well world-class Programmer.
        </p>
        <div>
          <Button text={"Explore Now"}></Button>
          <Button text={"Call Now"}></Button>
        </div>
      </div>
    </div>
  );
};
