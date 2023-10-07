import { Link } from "../Link.jsx";
export default function HomePage() {
  return (
    <>
      <h1>HomePage</h1>
      <p>Espacio para React Router desde 0 home Page</p>
      <Link to="/about">Sobre nosotros</Link>
    </>
  );
}
