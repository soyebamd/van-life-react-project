import Btn from "../components/Button.jsx";
export default function Home() {
  return (
    <section
      className="bg-black p-5 bg-cover bg-center min-h-96 flex flex-col justify-center items-center text-white text-left gap-8"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <h1 className="text-4xl text-white font-headingTitle">
        You got the travel plans, we got the travel vans.
      </h1>
      <p>
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>

      <Btn
        link="link"
        btnClass="bg-orange mt-6 text-white w-full min-h-12 hover:bg-black transition-color duration-400"
      >
        Find your van
      </Btn>
    </section>
  );
}
