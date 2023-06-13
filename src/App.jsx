import { useState } from "react";
import Title from "./components/Title";
import menuItems from "./data";
import Menu from "./components/Menu";
import Categories from "./components/Categories";

const menuCategories = [
  "All",
  ...[...new Set(menuItems.map((menu) => menu.category))],
];

const App = () => {
  const [menuList, setMenuList] = useState(menuItems);
  const [categories, setCategories] = useState(menuCategories);

  const onCategoryChange = (category) => {
    if (category === "All") {
      setMenuList(menuItems);
      return;
    }
    const selectedCategoryMenuItems = menuItems.filter(
      (menuItem) => menuItem.category === category
    );
    setMenuList(selectedCategoryMenuItems);
  };

  return (
    <main>
      <section className="menu">
        <Title />
        <Categories
          categories={categories}
          onCategoryChange={onCategoryChange}
        />
        <Menu menuList={menuList} />
      </section>
    </main>
  );
};
export default App;
