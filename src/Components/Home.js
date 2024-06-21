import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from "antd";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";
import axios from "axios";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  const fetchRandomMealAndNavigate = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const randomMeal = response.data.meals[0];
      navigate("/random-meal", { state: { meal: randomMeal } });
    } catch (error) {
      console.error("Error fetching random meal:", error);
    }
  };

  return (
    <>
      <div
        className="bg-[#FFEEA9]  h-[100vh] flex items-center justify-center"
        style={{ padding: "20px" }}
      >
        {/* <div>Welcome To Store</div> */}
        <Row gutter={16}>
          <Col span={20}>
            <Card
              className="flex my-5 justify-stretch flex-col"
              title={
                <div className="flex items-center  justify-center">
                  <MdOutlineRestaurantMenu className="mx-2 font-bold text-yellow-800" />{" "}
                  Menu
                </div>
              }
              bordered={false}
              hoverable
              onClick={() => navigate("/menu")}
              style={{ textAlign: "center" }}
            >
              Browse our menu
            </Card>
          </Col>
          <Col span={20}>
            <Card
              className="flex my-5 justify-stretch flex-col"
              // title="Favourites"
              title={
                <div className="flex items-center  justify-center">
                  <FaHeart className="mx-2 font-bold text-red-600" /> Favourites
                </div>
              }
              bordered={false}
              hoverable
              onClick={() => navigate("/favourites")}
              style={{ textAlign: "center" }}
            >
              View your favourite meals
            </Card>
          </Col>
          <Col span={20}>
            <Card
              onClick={fetchRandomMealAndNavigate}
              className="flex my-5 justify-stretch flex-col"
              // title="Random Meal Generator"
              title={
                <div className="flex items-center  justify-center">
                  <GiHotMeal className="mx-2 font-bold text-yellow-800" />{" "}
                  Random Meal Generator
                </div>
              }
              bordered={false}
              hoverable
              // onClick={() => navigate("/random-meal")}
              style={{ textAlign: "center" }}
            >
              Get a random meal suggestion
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Card, Col, Row } from "antd";
// import { MdOutlineRestaurantMenu } from "react-icons/md";
// import { FaHeart } from "react-icons/fa";
// import { MdOutlineRestaurant } from "react-icons/md";
// import axios from "axios";

// const Home = () => {
//   const navigate = useNavigate();

//   const fetchRandomMealAndNavigate = async () => {
//     try {
//       const response = await axios.get(
//         "https://www.themealdb.com/api/json/v1/1/random.php"
//       );
//       const randomMeal = response.data.meals[0];
//       navigate("/random-meal", { state: { meal: randomMeal } });
//     } catch (error) {
//       console.error("Error fetching random meal:", error);
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Welcome to Our Store</h1>
//       <Row gutter={16}>
//         <Col span={8}>
//           <Card
//             title={
//               <span>
//                 <MdOutlineRestaurantMenu /> Menu
//               </span>
//             }
//             bordered={false}
//             hoverable
//             onClick={() => navigate("/menu")}
//             style={{ textAlign: "center" }}
//           >
//             Browse our menu
//           </Card>
//         </Col>
//         <Col span={8}>
//           <Card
//             title={
//               <span>
//                 <FaHeart /> Favourites
//               </span>
//             }
//             bordered={false}
//             hoverable
//             onClick={() => navigate("/favourites")}
//             style={{ textAlign: "center" }}
//           >
//             View your favourite meals
//           </Card>
//         </Col>
//         <Col span={8}>
//           <Card
//             title={
//               <span>
//                 <MdOutlineRestaurant /> Random Meal Generator
//               </span>
//             }
//             bordered={false}
//             hoverable
//             onClick={fetchRandomMealAndNavigate}
//             style={{ textAlign: "center" }}
//           >
//             Get a random meal suggestion
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default Home;
