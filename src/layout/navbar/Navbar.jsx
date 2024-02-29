import { CiSearch } from "react-icons/ci";
import "./Navbar.css";
import { Link } from "react-router-dom";
import BasicMenu from "../../components/categoryCollapse/CategoryCollapseContainer";

export const Navbar = () => {
  return (
    <nav>
      <ul className="bar">
        <Link to="/">
          <li>inicio</li>
        </Link>
        <Link to="/allProducts">
          <li>shop</li>
        </Link>
        <li>
          <BasicMenu />
        </li>
        <Link>
          <li>contacto</li>
        </Link>
        <li className="buscador">
          <CiSearch size={"1.3rem"} style={{ justifyItems: "center" }} />
        </li>
      </ul>
    </nav>
  );
};
