import { Outlet } from "react-router";
import { NavLink } from "react-router";

export default function DashboardLayout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/host" end>
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/host/income">Income</NavLink>
          </li>

          <li>
            <NavLink to="/host/vans">Vans</NavLink>
          </li>

          <li>
            <NavLink to="/host/reviews">Reviews</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}
