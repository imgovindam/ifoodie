import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button, message } from "antd";
import { removeFavorite } from "../Redux/favoritesSlice";
import { HeartFilled } from "@ant-design/icons";

const { Meta } = Card;

const Favourites = () => {
  const favorites = useSelector((state) => state.favorites.items);
  const dispatch = useDispatch();

  const handleRemoveFavorite = (idMeal) => {
    dispatch(removeFavorite(idMeal));
    message.success(`Meal removed from favorites`);
  };

  return (
    <div className="grid grid-cols-12 h-[100vh]">
      <div className="flex items-center justify-center text-[40px] font-sans font-semibold text-orange-300 col-span-12">
        Favourites
      </div>
      <div className="bg-[#FFEEA9] col-span-12 h-[100vh]">
        <div className="bg-[#FFEEA9] flex flex-wrap justify-center h-[100vh]">
          {favorites.length > 0 ? (
            favorites.map((meal) => (
              <div key={meal.idMeal} className="m-4">
                <Card
                  className="bg-orange-300"
                  hoverable
                  style={{ width: 240 }}
                  cover={<img src={meal.strMealThumb} alt={meal.strMeal} />}
                >
                  <Meta title={meal.strMeal} />
                  <Button
                    type="text"
                    icon={<HeartFilled style={{ color: "red" }} />}
                    onClick={() => handleRemoveFavorite(meal.idMeal)}
                  >
                    Remove
                  </Button>
                </Card>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center text-[20px] font-sans font-semibold text-gray-500 col-span-12">
              No favorite meals added yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
