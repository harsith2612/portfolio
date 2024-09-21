import { NavLink } from "react-router-dom";
const NavbarList = () => {
  return (
    <div className="h-fit flex flex-col space-y-5 mt-5 md:flex-row md:mt-0 md:space-y-0 md:h-fit md:space-x-24 lg:space-x-48">
      <div className="space-y-3">
        <NavLink to="/projects">
          <p className="text-lg font-medium">Project</p>
        </NavLink>

        <hr className="md:hidden" />
      </div>
      <div className="space-y-3">
        <NavLink to="/about">
          <p className="text-lg font-medium">About</p>
        </NavLink>

        <hr className="md:hidden" />
      </div>
      <div className="space-y-3">
        <NavLink to="/contact">
          <p className="text-lg font-medium">Contact</p>
        </NavLink>

        <hr className="md:hidden" />
      </div>
    </div>
  );
};

export default NavbarList;
