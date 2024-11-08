/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Card } from "../../shared/Card";
import { Cart } from "../Cart/Cart";

export const OurRecepies = ({ handleWantToCook, recepies }) => {
  const [recepiess, setRecepiess] = useState([]);

  useEffect(() => {
    fetch("./recepies.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setRecepiess(data);
      });
  }, []);

  return (
    <div>
      <div className="section-title text-center py-8">
        <h2 className="mb-4">Our Recepies</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.{" "}
        </p>
      </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ">
          {/* Left Column with Food Item Cards */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {recepiess.map((recepi, idx) => (
              <Card
                key={idx}
                recepi={recepi}
                handleWantToCook={handleWantToCook}
              />
            ))}
            {/* <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">Card Two</h2>
              <p>Another delicious food item description.</p>
            </div> */}
          </div>

          {/* Right Column with Cart */}
          <div className="">
            <Cart recepies={recepies} />
          </div>
        </div>
      </div>
    </div>
  );
};
