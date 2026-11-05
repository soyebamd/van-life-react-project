import "../server.js";
import { useState, useEffect } from "react";
import Btn from "../components/Button.jsx";
import PostCard from "../components/PostCard.jsx";

export default function Vans() {
  const [list, updatedList] = useState({});

  useEffect(() => {
    fetch("/api/vans/")
      .then((response) => response.json())
      .then((reuslt) => updatedList(reuslt));
  }, []);

  const getVansList = list.vans?.map((item) => (
    <PostCard key={item.id} item={item} />
  ));

  return (
    <>
      <div className="px-5">
        <h1 className="text-3xl  mb-8">Explore our van options</h1>
        <ul className="flex flex-wrap gap-4 justify-center">
          <li>
            <Btn
              variant="simple"
              btnClass=" max-w-[100px]  self-start text-white rounded-md hover:bg-orange3 text-base transition-color duration-400 min-h-8.25"
            >
              Simple
            </Btn>
          </li>

          <li>
            <Btn
              variant="luxury"
              btnClass=" max-w-[100px]  self-start text-white rounded-md hover:bg-orange3 text-base transition-color duration-400 min-h-8.25"
            >
              Luxury
            </Btn>
          </li>

          <li>
            <Btn
              variant="rugged"
              btnClass=" max-w-[100px]  self-start text-white rounded-md hover:bg-orange3 text-base transition-color duration-400 min-h-8.25"
            >
              Rugged
            </Btn>
          </li>

          <li>
            <Btn
              variant=""
              btnClass=" max-w-[100px]  self-start text-black rounded-md hover:bg-orange3 text-base transition-color duration-400 min-h-8.25"
            >
              Clear filters
            </Btn>
          </li>
        </ul>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          {getVansList}
        </section>
      </div>
    </>
  );
}
