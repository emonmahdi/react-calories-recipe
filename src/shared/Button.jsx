/* eslint-disable react/prop-types */
export const Button = ({ text }) => {
  return (
    <button className="p-4 bg-green-400 rounded-md text-black font-bold m-4">
      {text}
    </button>
  );
};
