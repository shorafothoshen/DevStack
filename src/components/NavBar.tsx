import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/logo-text.png";

const NavBar = () => {
  return (
    <>
      <nav className="bg-white sticky top-0 z-50">
        <div className=" container mx-auto flex justify-between items-center px-3 py-3 md:px-20 md:py-4">
          <RxHamburgerMenu className="md:hidden font-bold text-2xl" />
          <img src={Logo} alt={Logo} className="w-28 md:w-40" />
          <ul className="hidden md:flex md:items-center md:space-x-4 md:text-gray-600 font-bold">
            <li className="text-pink-600">Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className="flex gap-4">
            <button>Sign In</button>
            <button className=" bg-pink-600 text-white rounded-2xl md:px-4 md:py-1 text-center px-3 py-1">
              Sign Up
            </button>
          </div>
        </div>
        <hr className="border border-gray-100" />
      </nav>
    </>
  );
};

export default NavBar;
