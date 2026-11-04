import Btn from "../components/btn";
export default function About() {
  return (
    <>
      {" "}
      <section className="my-10">
        <img
          src="./about-bg.jpg"
          alt="About Van Life"
          className="w-full h-auto"
        />

        <div className="content flex flex-col gap-6 px-5 my-10">
          <h2 className="text-2xl ">
            Don’t squeeze in a sedan when you could relax in a van.
          </h2>
          <p>
            {" "}
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch.
          </p>
          <p>
            (Hitch costs extra 😉) Our team is full of vanlife enthusiasts who
            know firsthand the magic of touring the world on 4 wheels.
          </p>
        </div>
      </section>
      <section className="bg-lightOrange p-5 m-5 my-10 rounded-sm flex flex-col gap-5 mx-6 ">
        <h2 className="text-2xl ">Your destination is waiting.</h2>
        <p>
          Your van is ready. Your adventure awaits. Whether you’re off for a
          weekend getaway or a cross-country expedition, we’ve got you covered
          with our wide selection of the best travel vans in the US.
        </p>

        <Btn
          link="link"
          btnClass="bg-black self-start text-white min-h-12 w-auto hover:bg-orange hover:text-black transition-color duration-400"
        >
          Explore our vans
        </Btn>
      </section>
    </>
  );
}
