import { Link } from "react-router";
export default function NotFound() {
  return (
    <section className="bg-luxury p-5 bg-cover bg-center min-h-96 flex flex-col justify-center items-center text-white text-left gap-8">
      <h1 className="text-8xl ">404</h1>
      <h2 className="text-2xl">Page Not Found</h2>
      <p>Sorry, the page you're looking for doesn't exist.</p>

      <Link
        to="/"
        className="font-bold rounded-md flex items-center justify-center px-4 bg-orange mt-6 text-white w-full min-h-12 hover:bg-black transition-color duration-400"
      >
        Go Home
      </Link>
    </section>
  );
}
