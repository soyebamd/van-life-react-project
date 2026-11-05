import { Link, NavLink } from "react-router";

// Vans data
const vans = [
  {
    id: 1,
    name: "Modest Explorer",
    price: 60,
    image: "/images/modest-explorer.png",
  },
  {
    id: 2,
    name: "Beach Bum",
    price: 80,
    image: "/images/beach-bum.png",
  },
  {
    id: 3,
    name: "Green Wonder",
    price: 70,
    image: "/images/green-wonder.png",
  },
];

export default function Dashboard() {
  return (
    <>
      {/* Dashboard Section */}
      <section>
        <h2>Welcome!</h2>

        {/* Income Summary */}
        <section>
          <div>
            <h3>
              Income last <Link to="/host/income">30 days</Link>
            </h3>

            <Link to="/host/income">Details</Link>
          </div>

          <p>$2,260</p>
        </section>

        {/* Review Summary */}
        <section>
          <div>
            <h3>Review score</h3>

            <p>
              <span aria-hidden="true">★</span>
              <strong>5.0</strong>/5
            </p>
          </div>

          <Link to="/host/reviews">Details</Link>
        </section>
      </section>

      {/* Listed Vans */}
      <section>
        <div>
          <h2>Your listed vans</h2>
          <Link to="/host/vans">View all</Link>
        </div>

        <ul>
          {vans.map((van) => (
            <li key={van.id}>
              <article>
                <img src={van.image} alt={van.name} />

                <div>
                  <h3>{van.name}</h3>
                  <p>${van.price}/day</p>
                </div>

                <Link to={`/host/vans/${van.id}/edit`}>Edit</Link>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
