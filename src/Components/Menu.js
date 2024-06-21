// import React, { useEffect, useState } from "react";
// import { Card, Button } from "antd";
// import { useDispatch, useSelector } from "react-redux"; // Import these to use redux for managing favorites
// import { addFavorite, removeFavorite } from "../Redux/favoritesSlice"; // Assuming you have these actions in your redux slice
// import { HeartOutlined, HeartFilled } from "@ant-design/icons";
// import { useNavigate } from "react-router-dom";

// import { IoArrowBack } from "react-icons/io5";
// import { motion } from "framer-motion";

// const { Meta } = Card;

// const Menu = () => {
//   const navigate = useNavigate();

//   const [categories, setCategories] = useState([]);
//   const [meals, setMeals] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const favorites = useSelector((state) => state.favorites.items);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch(
//           "https://www.themealdb.com/api/json/v1/1/categories.php"
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch categories");
//         }
//         const data = await response.json();
//         setCategories(data.categories);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const fetchMealsByCategory = async (category) => {
//     try {
//       const response = await fetch(
//         `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
//       );
//       if (!response.ok) {
//         throw new Error("Failed to fetch meals");
//       }
//       const data = await response.json();
//       setMeals(data.meals);
//     } catch (error) {
//       console.error("Error fetching meals:", error);
//     }
//   };

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//     fetchMealsByCategory(category);
//   };
//   const handleNavigation = () => {
//     navigate("/home");
//   };
//   const handleFavoriteToggle = (meal) => {
//     if (favorites.some((fav) => fav.idMeal === meal.idMeal)) {
//       dispatch(removeFavorite(meal.idMeal));
//     } else {
//       dispatch(addFavorite(meal));
//     }
//   };

//   return (
//     <div>
//       <div className="flex items-center justify-center text-[40px] font-sans font-semibold text-orange-300">
//         Menu
//       </div>
//       {selectedCategory ? (
//         <div className="grid grid-cols-12 h-[100vh]">
//           {/* <div className="flex justify-center items-center">
//             <h2>Meals in {selectedCategory}</h2>
//           </div> */}
//           <div className="bg-white col-span-12">
//             <div className="flex justify-between items-center">
//               <h2 className="font-sans font-semibold ">
//                 Meals in{" "}
//                 <span className="text-[20px] font-sans font-semibold text-orange-300">
//                   {selectedCategory}
//                 </span>
//               </h2>

//               <motion.div
//                 whileHover={{ scale: 1.1 }}
//                 className="bg-orange-300 items-center m-1 rounded-lg"
//                 onClick={handleNavigation}
//               >
//                 <button className="px-2 py-2 mx-2">
//                   <IoArrowBack className="text-[30px]" />
//                 </button>
//               </motion.div>
//             </div>
//             <div className="bg-[#FFEEA9] flex flex-wrap items-center justify-center">
//               {meals.map((meal) => (
//                 <motion.div
//                   whileHover={{ scale: 1.1 }}
//                   key={meal.idMeal}
//                   className="m-4"
//                 >
//                   <Card
//                     className=""
//                     hoverable
//                     style={{ width: 240 }}
//                     cover={<img src={meal.strMealThumb} alt={meal.strMeal} />}
//                   >
//                     <div className="">
//                       <Meta className="" title={meal.strMeal} />
//                       <Button
//                         type="text"
//                         icon={
//                           favorites.some(
//                             (fav) => fav.idMeal === meal.idMeal
//                           ) ? (
//                             <HeartFilled
//                               className="font-sans font-bold"
//                               style={{ color: "red" }}
//                             />
//                           ) : (
//                             <HeartOutlined />
//                           )
//                         }
//                         onClick={() => handleFavoriteToggle(meal)}
//                       />
//                     </div>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="grid grid-cols-4 gap-4 bg-[#FFEEA9] p-4">
//           {categories.map((item) => (
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               key={item.idCategory}
//               className="flex items-center justify-center my-4"
//             >
//               <Card
//                 hoverable
//                 className="bg flex flex-col items-center justify-center"
//                 style={{ width: 240 }}
//                 cover={
//                   <img src={item.strCategoryThumb} alt={item.strCategory} />
//                 }
//                 onClick={() => handleCategoryClick(item.strCategory)}
//               >
//                 <Meta title={item.strCategory} />
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Menu;

import React, { useEffect, useState } from "react";
import { Card, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../Redux/favoritesSlice";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { motion } from "framer-motion";

const { Meta } = Card;

const Menu = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const favorites = useSelector((state) => state.favorites.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const fetchMealsByCategory = async (category) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch meals");
      }
      const data = await response.json();
      setMeals(data.meals);
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    fetchMealsByCategory(category);
  };

  const handleNavigation = () => {
    navigate("/home");
  };

  const handleFavoriteToggle = (meal) => {
    if (favorites.some((fav) => fav.idMeal === meal.idMeal)) {
      dispatch(removeFavorite(meal.idMeal));
      message.success(`${meal.strMeal} removed from favorites`);
    } else {
      dispatch(addFavorite(meal));
      message.success(`${meal.strMeal} added to favorites`);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center text-[40px] font-sans font-semibold text-orange-300">
        Menu
      </div>
      {selectedCategory ? (
        <div className="grid grid-cols-12  h-[100vh]">
          <div className="bg-white col-span-12">
            <div className="flex justify-between items-center p-4">
              <h2 className="font-sans font-semibold">
                Meals in{" "}
                <span className="text-[20px] font-sans font-semibold text-orange-300">
                  {selectedCategory}
                </span>
              </h2>

              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-orange-300 items-center m-1 rounded-lg"
                onClick={handleNavigation}
              >
                <button className="px-2 py-2 mx-2">
                  <IoArrowBack className="text-[30px]" />
                </button>
              </motion.div>
            </div>
            <div className="bg-[#FFEEA9] min-h-[100vh] flex flex-wrap items-center justify-center">
              {meals.map((meal) => (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  key={meal.idMeal}
                  className="m-4"
                >
                  <Card
                    className="bg-orange-300 "
                    hoverable
                    style={{ width: 240 }}
                    cover={<img src={meal.strMealThumb} alt={meal.strMeal} />}
                  >
                    <div className="">
                      <Meta title={meal.strMeal} />
                      <Button
                        type="text"
                        icon={
                          favorites.some(
                            (fav) => fav.idMeal === meal.idMeal
                          ) ? (
                            <HeartFilled style={{ color: "red" }} />
                          ) : (
                            <HeartOutlined />
                          )
                        }
                        onClick={() => handleFavoriteToggle(meal)}
                      />
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4 bg-[#FFEEA9] p-4">
          {categories.map((item) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              key={item.idCategory}
              className="flex items-center justify-center my-4"
            >
              <Card
                hoverable
                className="bg flex flex-col items-center justify-center"
                style={{ width: 240 }}
                cover={
                  <img src={item.strCategoryThumb} alt={item.strCategory} />
                }
                onClick={() => handleCategoryClick(item.strCategory)}
              >
                <Meta title={item.strCategory} />
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
