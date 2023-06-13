import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ menuList }) => {
  return (
    <section className="section-center">
      {menuList.map((menuItem) => {
        return <MenuItem menuItem={menuItem} key={menuItem.id} />;
      })}
    </section>
  );
};

export default Menu;
