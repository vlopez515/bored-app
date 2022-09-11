import { Link } from "react-router-dom";
import { StyledNavBar } from "./styles/NavBar.styled";

function NavBar() {
  return (
    <StyledNavBar>
      <Link to="/">
        <h1 className="app-logo"> LINK TO HOMEPAGE</h1>
      </Link>{" "}
      <Link to="/activities">
        <button>Favorite Activities</button>
      </Link>
    </StyledNavBar>
  );
}

export default NavBar;
