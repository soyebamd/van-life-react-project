import { Link } from "react-router";

export default function Header() {
  return (
    <header className="grid grid-cols-2  min-h-22.75 px-5">
      <h1 className="text-2xl font-bold font-inter flex items-center ">
        #VANLIFE
      </h1>
      <ul className="flex justify-end gap-4 md:gap-6 items-center font-semibold text-base ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Vans</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
}
