// import React, { useState } from "react";
// import { Drawer, Menu } from "antd";
// import { CiMenuBurger } from "react-icons/ci";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [drawerVisible, setDrawerVisible] = useState(false);
//   const navigate = useNavigate();

//   const showDrawer = () => {
//     setDrawerVisible(true);
//   };

//   const closeDrawer = () => {
//     setDrawerVisible(false);
//   };

//   const handleNavigation = (path) => {
//     navigate(path);
//     closeDrawer();
//     console.log(path);
//   };

//   return (
//     <div className="bg-yellow-300 h-10 flex items-center ">
//       <div className="cursor-pointer mx-2" onClick={showDrawer}>
//         <CiMenuBurger className="font-bold text-[40px]" />
//       </div>
//       {/* <div>
//         <span>iFoodie</span>
//       </div> */}
//       <Drawer
//         title="Menu"
//         placement="left"
//         closable={false}
//         onClose={closeDrawer}
//         visible={drawerVisible}
//       >
//         <Menu theme="light" mode="inline">
//           <Menu.Item key="1" onClick={() => handleNavigation("/home")}>
//             Home
//           </Menu.Item>
//           <Menu.Item key="2" onClick={() => handleNavigation("/menu")}>
//             Menu
//           </Menu.Item>
//           <Menu.Item key="3" onClick={() => handleNavigation("/favourites")}>
//             Favourites
//           </Menu.Item>
//           <Menu.Item key="4" onClick={() => handleNavigation("/random-meal")}>
//             Random Meal Generator
//           </Menu.Item>
//           <Menu.Item key="5" onClick={() => handleNavigation("/about")}>
//             About Me
//           </Menu.Item>
//         </Menu>
//       </Drawer>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Drawer, Menu, message } from "antd";
import { CiMenuBurger } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const navigate = useNavigate();

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const handleNavigation = async (path) => {
    if (path === "/random-meal") {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch random meal");
        }
        const data = await response.json();
        const meal = data.meals[0];
        navigate(path, { state: { meal } });
      } catch (error) {
        message.error("Failed to fetch random meal");
      }
    } else {
      navigate(path);
    }
    closeDrawer();
  };

  return (
    <div className="bg-yellow-300 h-10 flex items-center ">
      <div className="cursor-pointer mx-2" onClick={showDrawer}>
        <CiMenuBurger className="font-bold text-[40px]" />
      </div>
      <Drawer
        title="Menu"
        placement="left"
        closable={false}
        onClose={closeDrawer}
        visible={drawerVisible}
      >
        <Menu theme="light" mode="inline">
          <Menu.Item key="1" onClick={() => handleNavigation("/home")}>
            Home
          </Menu.Item>
          <Menu.Item key="2" onClick={() => handleNavigation("/menu")}>
            Menu
          </Menu.Item>
          <Menu.Item key="3" onClick={() => handleNavigation("/favourites")}>
            Favourites
          </Menu.Item>
          <Menu.Item key="4" onClick={() => handleNavigation("/random-meal")}>
            Random Meal Generator
          </Menu.Item>
          <Menu.Item key="5" onClick={() => handleNavigation("/about")}>
            About Me
          </Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );
};

export default Navbar;
