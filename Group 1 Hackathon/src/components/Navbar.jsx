import { Link } from "react-router-dom";

const Navbar = function () {
  return (
    <>
      <div className="container Navbar">
        <div className="row">
          <div className="col-md-3">
            <nav className="navbar navbar-expand-lg">
              <Link className="navbar-brand" to="/">
                <img class="star" src="\src\assets\star.svg" />
              </Link>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <Link className="nav-link" to="/">
                      Home <span class="sr-only"></span>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" to="/WhatsOn">
                      What's On
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" to="/Signup">
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

// import { Nav, NavLink, NavMenu } from "./NavbarElements";

// <Nav>
//     <NavMenu>
//         <NavLink to="./pages/Home" activeStyle>
//             Home
//         </NavLink>
//         <NavLink to="./pages/Whatson" activeStyle>
//             Whats On
//         </NavLink>
//         <NavLink to="./pages/Signup" activeStyle>
//             Sign Up
//         </NavLink>
//     </NavMenu>
// </Nav>
