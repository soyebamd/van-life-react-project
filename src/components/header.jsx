import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="flex flex-wrap md:flex-nowrap md:justify-between  min-h-22.75 px-5">
      <h1 className="text-2xl  font-inter flex items-center">#VANLIFE</h1>
      <ul className="flex gap-4 md:gap-6 items-center font-semibold text-base grid-cols-1">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-orange-500 font-bold" : "text-gray-700"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-orange-500 font-bold" : "text-gray-700"
            }
          >
            Vans
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/vans"
            className={({ isActive }) =>
              isActive ? "text-orange-500 font-bold" : "text-gray-700"
            }
          >
            Vans List
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-orange-500 font-bold" : "text-gray-700"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
