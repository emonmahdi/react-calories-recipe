/* eslint-disable react/prop-types */
export const Cart = ({ recepies }) => {
  const handleRecepies = (id) => {
    console.log("preparing the recepi", id);
  };

  return (
    <div className="  p-4 rounded-lg shadow-md text-center ">
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-4">
          Want to Cook : {recepies.length}
        </h2>
        <div className="flex justify-between items-center">
          {/* {
                recepies.map((recepi) => )
            }
          <p>name</p>
          <p>time</p>
          <p>calories</p>
          <button className="p-2 bg-green-400 rounded-md text-black font-bold m-2">
            Preparing
          </button> */}
          {recepies.length > 0 && (
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="p-4 border-b font-semibold text-left">Name</th>
                  <th className="p-4 border-b font-semibold text-left">Time</th>
                  <th className="p-4 border-b font-semibold text-left">
                    Calories
                  </th>
                  <th className="p-4 border-b font-semibold text-left">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {recepies.map((recipe, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-4">{recipe.recipe_name}</td>
                    <td className="p-4">{recipe.preparing_time}</td>
                    <td className="p-4">{recipe.calories}</td>
                    <td className="p-4">
                      <button
                        onClick={() => handleRecepies(recipe.id)}
                        className="p-2 bg-green-400 rounded-md text-black font-bold"
                      >
                        Preparing
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <hr />
      <div>
        <h2 className="text-xl font-bold mb-2">Currently Cooking...</h2>
        <div className="flex justify-between items-center">
          <p>name</p>
          <p>time</p>
          <p>calories</p>
          <button>Preparing</button>
        </div>
      </div>
    </div>
  );
};
