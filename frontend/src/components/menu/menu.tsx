import Budgets from "app/budgets";
import Home from "app/home";
import Users from "app/users";
import { NavLink, Route, Routes } from "react-router-dom";

import styles from "./menu.module.css";
import BudgetDetails from "app/budget.detail";

const Menu = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div>
          <NavLink className={styles.navAnchor} to="/">
            Home
          </NavLink>
          <NavLink className={styles.navAnchor} to="/users">
            Users
          </NavLink>
          <NavLink className={styles.navAnchor} to="/budgets">
            Budgets
          </NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/budgets" element={<Budgets />} />
        <Route path="/budget/:budgetId" element={<BudgetDetails />} />
      </Routes>
    </>
  );
};

export default Menu;
