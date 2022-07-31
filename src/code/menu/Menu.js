import React, { useState } from "react";
import items from "./data";
import Categories from "./Categories";
import Meal from "./Meal";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function Menu() {
  const [menuItem, setMenuItem] = useState(items);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItem(items);
      return;
    }
    const newItem = items.filter((item) => item.category === category);
    setMenuItem(newItem);
  };

  return (
    <main>
      <section>
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={allCategories} filterItems={filterItems} />
        <Meal items={menuItem} />
      </section>
    </main>
  );
}

export default Menu;
