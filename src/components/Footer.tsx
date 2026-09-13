import Logo from "../assets/logo-text.png";
import { GoDotFill } from "react-icons/go";
const Footer = () => {
  return (
    <footer className="flex flex-col mt-20 pb-6">
      <div className="flex md:flex-row md:space-x-10 md:justify-between md:px-20">
        <div className="flex flex-col items-center md:items-start gap-3">
          <img src={Logo} alt="" />
          <p className="text-center px-1 text-gray-500 md:text-left">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <ul className="flex gap-3 text-lg items-center underline md:no-underline md:cursor-pointer md:items-start">
            <li className="hover:md:underline">Github</li>
            <GoDotFill className="md:hidden" />
            <li className="hover:md:underline">Twitter</li>
            <GoDotFill className="md:hidden" />
            <li className="hover:md:underline">LinkedIn</li>
          </ul>
        </div>
        <div className="hidden md:block space-y-3">
          <h1 className="font-medium">PRODUCT</h1>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
          </ul>
        </div>
        <div className="hidden md:block space-y-3">
          <h1 className="font-medium">COMPARY</h1>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="hidden md:block space-y-3">
          <h1 className="font-medium">LEGAL</h1>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between px-4 md:px-20 mt-8">
        <h1 className="text-sm">© 2026 Dev Stack. All rights reserved.</h1>
        <div className="flex gap-3 text-sm">
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
