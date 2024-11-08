export const OurRecepies = () => {
  return (
    <div>
      <div className="section-title text-center py-20">
        <h2 className="mb-4">Our Recepies</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.{" "}
        </p>
      </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column with Food Item Cards */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">Card One</h2>
              <p>Delicious food item description.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">Card Two</h2>
              <p>Another delicious food item description.</p>
            </div>
          </div>

          {/* Right Column with Cart */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Cart</h2>
            <p>Your selected items will appear here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
