import { Link } from "react-router";

export default function VansDashboard() {
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

  return (
    <>
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
