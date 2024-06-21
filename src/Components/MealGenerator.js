// import React from "react";
// import { useLocation } from "react-router-dom";

// const MealGenerator = () => {
//   const location = useLocation();
//   const { meal } = location.state || {};
//   console.log(location);

//   const splitInstructions = (instructions) => {
//     return instructions.split(". ").filter((point) => point.length > 0);
//   };

//   return (
//     <div className="">
//       {meal ? (
//         <div className="grid grid-cols-12 h-[100vh]  ">
//           <div className="col-span-6 flex items-center justify-center">
//             <img
//               className="h-[80vh] flex justify-center items-center p-6 m-5"
//               src={meal.strMealThumb}
//               alt={meal.strMeal}
//             />
//           </div>
//           <div className="col-span-6 flex flex-col items-center justify-center">
//             <div className="font-sans my-2 rounded-md p-3 font-semibold bg-yellow-700 text-slate-200">
//               <h1 className="">{meal.strMeal}</h1>
//             </div>
//             <ul className="p-5 list-disc font-sans  font-thin">
//               {splitInstructions(meal.strInstructions).map(
//                 (instruction, index) => (
//                   <li key={index}>{instruction}</li>
//                 )
//               )}
//             </ul>
//           </div>
//           {/* Add any other meal details you want to display */}
//         </div>
//       ) : (
//         <p>No meal data available</p>
//       )}
//     </div>
//   );
// };

// export default MealGenerator;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RiAiGenerate } from "react-icons/ri";
import { motion } from "framer-motion";

const MealGenerator = () => {
  const location = useLocation();
  const initialMeal = location.state?.meal || null;
  const [meal, setMeal] = useState(initialMeal);

  const splitInstructions = (instructions) => {
    return instructions.split(". ").filter((point) => point.length > 0);
  };

  const fetchRandomMeal = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch a random meal");
      }
      const data = await response.json();
      setMeal(data.meals[0]);
    } catch (error) {
      console.error("Error fetching a random meal:", error);
    }
  };

  useEffect(() => {
    if (!meal) {
      fetchRandomMeal();
    }
  }, [meal]);

  return (
    <div className="p-4">
      <button
        onClick={fetchRandomMeal}
        className="bg-orange-400 text-white p-2 rounded"
      >
        {/* <span className="font-sans font-normal">Generate Random Meal</span> */}
        <span className="font-sans font-normal">
          <RiAiGenerate />
        </span>
      </button>
      {meal ? (
        <div className="grid grid-cols-12 h-[100vh]">
          <div className="col-span-6 flex items-center justify-center">
            <motion.img
              whileHover={{ scale: 1.1 }}
              className="h-[80vh] flex justify-center items-center p-6 m-5"
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />
          </div>
          <div className="col-span-6 flex flex-col items-center justify-center">
            <div className="font-sans my-2 rounded-md p-3 font-semibold bg-yellow-700 text-slate-200">
              <h1 className="">{meal.strMeal}</h1>
            </div>
            <ul className="p-5 list-disc font-sans font-thin">
              {splitInstructions(meal.strInstructions).map(
                (instruction, index) => (
                  <li key={index}>{instruction}</li>
                )
              )}
            </ul>
          </div>
        </div>
      ) : (
        <p>No meal data available</p>
      )}
    </div>
  );
};

export default MealGenerator;
