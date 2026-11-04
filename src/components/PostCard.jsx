import Btn from "./btn";

export default function PostCard({ item }) {
  const { name, price, description, imageUrl, type, variant } = item;

  return (
    <article className="flex flex-col">
      <img src={imageUrl} alt={name} className="rounded-[5px] w-full" />

      <div className="flex font-semibold justify-between text-xl my-2">
        <h2>{name}</h2>

        <p>
          ${price}/<span className="text-xs">day</span>
        </p>
      </div>

      <Btn
        variant={type}
        btnClass="max-w-fit self-start text-white rounded-md hover:bg-orange3 text-base transition-colors duration-300 min-h-8.25"
      >
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </Btn>

      {/* Optional description */}
      {/* <p>{description}</p> */}
    </article>
  );
}
