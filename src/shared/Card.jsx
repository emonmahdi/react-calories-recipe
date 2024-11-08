/* eslint-disable react/prop-types */
export const Card = ({ recepi }) => {
  const {
    recipe_name,
    short_description,
    recipe_image,
    ingredients,
    preparing_time,
    calories,
  } = recepi;
  return (
    <div className="bg-white p-8 rounded-lg shadow-md mb-3">
      <img src={recipe_image} alt="" />
      <h2 className="text-lg font-bold my-3">{recipe_name}</h2>
      <p className="pb-4"> {short_description}</p>
      <hr />
      <h3 className="py-4">Ingredients : {ingredients.length}</h3>
      <ul>
        {ingredients.map((ingre, idx) => (
          <li key={idx}>{ingre}</li>
        ))}
      </ul>
      <div className="flex justify-between items-center my-4">
        <p>{preparing_time}</p>
        <p>{calories}</p>
      </div>
    </div>
  );
};