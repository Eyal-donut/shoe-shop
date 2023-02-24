import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <>
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
            }
            end
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MainNavigation;
