import { Outlet } from "react-router";
import { NavLink } from "react-router";

export default function DashboardLayout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/host"
              className={({ isActive }) =>
                isActive ? "text-orange-500 font-bold" : ""
              }
            >
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/host/income"
              className={({ isActive }) =>
                isActive ? "text-orange-500 font-bold" : ""
              }
            >
              Income
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/host/vans"
              className={({ isActive }) =>
                isActive ? "text-orange-500 font-bold" : ""
              }
            >
              Vans
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/host/reviews"
              className={({ isActive }) =>
                isActive ? "text-orange-500 font-bold" : ""
              }
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}
