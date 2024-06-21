// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchMealsByCategory,
//   addFavourite,
// } from "../features/meals/mealsSlice";

// const Meals = () => {
//   const { category } = useParams();
//   const dispatch = useDispatch();
//   const meals = useSelector((state) => state.meals.meals[category]);
//   const status = useSelector((state) => state.meals.status);

//   useEffect(() => {
//     if (!meals) {
//       dispatch(fetchMealsByCategory(category));
//     }
//   }, [category, dispatch, meals]);

//   return (
//     <div>
//       <h1>{category} Meals</h1>
//       <div>
//         {meals &&
//           meals.map((meal) => (
//             <div key={meal.idMeal}>
//               <img src={meal.strMealThumb} alt={meal.strMeal} />
//               <h2>{meal.strMeal}</h2>
//               <button onClick={() => dispatch(addFavourite(meal))}>
//                 Add to Favourites
//               </button>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Meals;

import React from "react";

const Meals = () => {
  return <div>Meals</div>;
};

export default Meals;
