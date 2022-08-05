import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/dashboard") {
      setIsActive("Dashboard");
    }
  }, []);

  const navbarItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: "images/home-icon.png",
      cName: "nav-item",
    },
    {
      title: "Users",
      icon: "images/products-icon.png",
      cName: "nav-item",
      path: "/users",
    },
    {
      title: "Products",
      path: "/products",
      icon: "images/shopping-bag.png",
      cName: "nav-item",
    },
    {
      title: "Reviews",
      path: "/products/reviews",
      icon: "images/reviews.png",
      cName: "nav-item",
    },
    {
      title: "Orders",
      icon: "images/shopping-bag.png",
      cName: "nav-item",
      path: `/orders`,
    },
  ];

  return (
    <div
      className="main-menu menu-fixed mt-2 menu-light black_bck menu-accordion"
      data-scroll-to-active="true"
    >
      <div className="main-menu-content">
        <ul
          className="navigation navigation-main"
          id="main-menu-navigation"
          data-menu="menu-navigation"
        >
          {navbarItems?.map((item, index) => {
            return (
              <li
                className={`nav-item ${
                  isActive === item?.title ? "active" : ""
                }`}
                key={index}
              >
                <Link to={item?.path}>
                  <img src={item?.icon} alt="" className="img-fluid" />
                  <span className="menu-title ml-2" data-i18n>
                    {item?.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
